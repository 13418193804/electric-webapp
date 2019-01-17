

export const sendMessage = (title,Context) =>{

	var NotifyID = 1;
	var Context = window.plus.android.importClass("android.content.Context");
	var main = window.plus.android.runtimeMainActivity();
	var Noti = window.plus.android.importClass("android.app.Notification");
	var NotificationManager = window.plus.android.importClass("android.app.NotificationManager");
	var nm = main.getSystemService(Context.NOTIFICATION_SERVICE)
	var Notification = window.plus.android.importClass("android.app.Notification");
	var mNotification = new Notification.Builder(main);
	mNotification.setOngoing(true);
	mNotification.setContentTitle("给大家推送一条消息",Context)
	mNotification.setContentText("这是我未大家推送的内容")
	mNotification.setSmallIcon(17301620)
	mNotification.setTicker("PadInfo")
	
	mNotification.setNumber(10)
	var mNb = mNotification.build()
	nm.notify(NotifyID, mNb);

}