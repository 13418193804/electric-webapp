import mqtt from "mqtt";
import jschardet from "jschardet";
import iconv from "iconv-lite";
import { mqtt_url, getBaseUrl } from "./api/conf";



export const loginMQTT = (token, callback) => {
    var mqttClient = mqtt.connect(mqtt_url);
    callback(mqttClient)
    mqttClient.on("connect", function () {
        // 发布主题
        //  setInterval(
        //  		()=>{mqttClient.publish('mqtt', '30');},
        //  		3000
        //  	);
        // 订阅主题/temperature  在message 处接收
        mqttClient.subscribe(
            `${getBaseUrl()}/mqttinterface?token=${token}`
        );
        console.log(`${getBaseUrl()}/mqttinterface?token=${token}`)
    });
    mqttClient.on("message", (topic, message) => {
        // console.log(message);
        console.log('-接受', iconv.decode(Uint8ArrayToString(message), 'utf8'))

        mqttClient.end()
        // this.messageList.push(str);
        // sendMessage(str);
    });
}

const Uint8ArrayToString = (fileData) => {
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }
    return dataString;
}

export const sendMessage = (message) => {

    var NotifyID = 1;
    var Context = window.plus.android.importClass("android.content.Context");
    var main = window.plus.android.runtimeMainActivity();
    var Noti = window.plus.android.importClass("android.app.Notification");
    var NotificationManager = window.plus.android.importClass("android.app.NotificationManager");
    var nm = main.getSystemService(Context.NOTIFICATION_SERVICE)
    var Notification = window.plus.android.importClass("android.app.Notification");
    var mNotification = new Notification.Builder(main);
    // mNotification.setOngoing(true);
    mNotification.setContentTitle("OVN智能运维")
    mNotification.setContentText(message)
    mNotification.setSmallIcon(17301620)
    mNotification.setTicker("PadInfo")
    mNotification.setNumber(10)
    var mNb = mNotification.build()
    nm.notify(NotifyID, mNb);
}
