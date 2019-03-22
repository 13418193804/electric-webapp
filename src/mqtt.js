import mqtt from "mqtt";
import jschardet from "jschardet";
import iconv from "iconv-lite";
import {  getBaseUrl, getMqttUrl } from "./api/conf";



export const loginMQTT = (token, callback) => {
    var mqttClient = mqtt.connect(getMqttUrl());
    callback(mqttClient)
    mqttClient.on("connect", function () {
        // 发布主题
        //  setInterval(
        //  		()=>{mqttClient.publish('mqtt', '30');},
        //  		3000
        //  	);
        // 订阅主题/temperature  在message 处接收
        // ${token}
        mqttClient.subscribe(
            `${getBaseUrl()}/mqttinterface?token=${token}`
        );
        mqttClient.subscribe(
            `${getBaseUrl()}/mqttinterface`
        );
        // console.log(`${getBaseUrl()}/mqttinterface?token=${token}`)
    });
    mqttClient.on("message", (topic, message) => {
        // console.log(message);
        let obj = JSON.parse(iconv.decode(Uint8ArrayToString(message), 'utf8'))
        console.log(obj)
        if (obj.teyp == 1) {
            sendMessage(
                obj.location,
                `${obj.device_name}：${obj.event}`
            );
        }
        if (obj.teyp == 2) {
            sendMessage(
                '通知',
                `${obj.content}`
            );
        }

        // mqttClient.end()
        // this.messageList.push(str);
    });
}

const Uint8ArrayToString = (fileData) => {
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }
    return dataString;
}

export const sendMessage = (title, message) => {
    var NotifyID = 1;
    var Context = window.plus.android.importClass("android.content.Context");
    var main = window.plus.android.runtimeMainActivity();
    var Intent = plus.android.importClass('android.content.Intent');
    var Noti = window.plus.android.importClass("android.app.Notification");
    var NotificationManager = window.plus.android.importClass("android.app.NotificationManager");
    var nm = main.getSystemService(Context.NOTIFICATION_SERVICE)
    var PendingIntent = plus.android.importClass('android.app.PendingIntent');
    var Notification = window.plus.android.importClass("android.app.Notification");
    var mNotification = new Notification.Builder(main);
    var intent = new Intent(main, main.getClass());
    var pendingIntent = PendingIntent.getActivity(main, 0, intent, PendingIntent.FLAG_CANCEL_CURRENT);

    // mNotification.setOngoing(true);
    mNotification.setContentTitle(title)
    mNotification.setContentText(message)
    mNotification.setSmallIcon(17301620)
    mNotification.setTicker("PadInfo")
    mNotification.setContentIntent(pendingIntent);
    mNotification.setNumber(10)
    mNotification.setDefaults(plus.android.importClass("android.app.Notification").DEFAULT_SOUND); //声音
    var mNb = mNotification.build()
    nm.notify(NotifyID, mNb);
    plus.device.vibrate(1000);

}
