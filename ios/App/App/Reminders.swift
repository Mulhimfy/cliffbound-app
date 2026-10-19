import Capacitor
import Foundation
import UIKit
import UserNotifications

/// The storyboard's root view controller: Capacitor's, plus the app's own native plugins.
class MainViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(RemindersPlugin())
    }
}

/// Evening reminders with a picture, planned by the game (src/game/notify.ts) and scheduled on the
/// phone with UNUserNotificationCenter. Same JavaScript interface as the Android RemindersPlugin.
@objc(RemindersPlugin)
public class RemindersPlugin: CAPPlugin, CAPBridgedPlugin, NotificationHandlerProtocol {
    public let identifier = "RemindersPlugin"
    public let jsName = "Reminders"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "status", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "request", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openSettings", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "schedule", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "cancelAll", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "pending", returnType: CAPPluginReturnPromise),
    ]

    private let center = UNUserNotificationCenter.current()

    override public func load() {
        bridge?.notificationRouter.localNotificationHandler = self
    }

    private func display(_ s: UNAuthorizationStatus) -> String {
        switch s {
        case .authorized, .provisional, .ephemeral: return "granted"
        case .denied: return "denied"
        default: return "prompt"
        }
    }

    @objc func status(_ call: CAPPluginCall) {
        center.getNotificationSettings { s in call.resolve(["display": self.display(s.authorizationStatus)]) }
    }

    @objc func request(_ call: CAPPluginCall) {
        center.requestAuthorization(options: [.alert, .sound, .badge]) { _, _ in
            self.center.getNotificationSettings { s in call.resolve(["display": self.display(s.authorizationStatus)]) }
        }
    }

    @objc func openSettings(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            var target = UIApplication.openSettingsURLString
            if #available(iOS 16.0, *) { target = UIApplication.openNotificationSettingsURLString }
            if let url = URL(string: target) { UIApplication.shared.open(url) }
            call.resolve()
        }
    }

    /// Replaces every pending reminder with `items` (all pending requests belong to this plugin).
    @objc func schedule(_ call: CAPPluginCall) {
        let items = call.getArray("items", JSObject.self) ?? []
        center.removeAllPendingNotificationRequests()
        var count = 0
        for item in items {
            guard let id = (item["id"] as? NSNumber)?.intValue, let trigger = makeTrigger(item) else { continue }
            let content = UNMutableNotificationContent()
            content.title = item["title"] as? String ?? ""
            content.body = item["body"] as? String ?? ""
            content.sound = .default
            content.threadIdentifier = "cliffbound"
            content.userInfo = ["route": item["route"] as? String ?? "home"]
            if let pic = item["picture"] as? String, let att = attachment(pic, id: id) { content.attachments = [att] }
            center.add(UNNotificationRequest(identifier: "cb-\(id)", content: content, trigger: trigger))
            count += 1
        }
        call.resolve(["scheduled": count])
    }

    @objc func cancelAll(_ call: CAPPluginCall) {
        center.removeAllPendingNotificationRequests()
        call.resolve()
    }

    @objc func pending(_ call: CAPPluginCall) {
        center.getPendingNotificationRequests { reqs in
            call.resolve(["items": reqs.map { ["id": $0.identifier, "title": $0.content.title, "body": $0.content.body] }])
        }
    }

    /// A local day + minute (follows the phone's time zone), or an absolute `at` in ms (tests).
    private func makeTrigger(_ item: JSObject) -> UNNotificationTrigger? {
        if let at = (item["at"] as? NSNumber)?.doubleValue, at > 0 {
            let dt = at / 1000 - Date().timeIntervalSince1970
            return dt > 0 ? UNTimeIntervalNotificationTrigger(timeInterval: max(1, dt), repeats: false) : nil
        }
        guard let day = item["day"] as? String, let minute = (item["minute"] as? NSNumber)?.intValue else { return nil }
        let parts = day.split(separator: "-").compactMap { Int($0) }
        guard parts.count == 3 else { return nil }
        var c = DateComponents()
        c.year = parts[0]
        c.month = parts[1]
        c.day = parts[2]
        c.hour = minute / 60
        c.minute = minute % 60
        guard let date = Calendar.current.date(from: c), date > Date() else { return nil }
        return UNCalendarNotificationTrigger(dateMatching: c, repeats: false)
    }

    /// The system moves an attachment's file into its own store, so it gets a copy of the bundled art.
    private func attachment(_ path: String, id: Int) -> UNNotificationAttachment? {
        guard !path.contains(".."), let base = Bundle.main.resourceURL else { return nil }
        let src = base.appendingPathComponent("public").appendingPathComponent(path)
        guard FileManager.default.fileExists(atPath: src.path) else { return nil }
        let dst = FileManager.default.temporaryDirectory.appendingPathComponent("cb-reminder-\(id)-\(UUID().uuidString).\(src.pathExtension)")
        do {
            try FileManager.default.copyItem(at: src, to: dst)
            return try UNNotificationAttachment(identifier: "picture", url: dst, options: nil)
        } catch {
            return nil
        }
    }

    // MARK: NotificationHandlerProtocol

    public func willPresent(notification: UNNotification) -> UNNotificationPresentationOptions {
        // the player is already in the game: no banner over the climb
        return []
    }

    public func didReceive(response: UNNotificationResponse) {
        guard response.actionIdentifier == UNNotificationDefaultActionIdentifier else { return }
        let route = response.notification.request.content.userInfo["route"] as? String ?? "home"
        notifyListeners("tap", data: ["route": route], retainUntilConsumed: true)
    }
}
