

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



// 扩展API加载完毕，现在可以正常调用扩展API

function onmarked(type, result) {
	var text = '未知: ';
	switch (type) {
		case plus.barcode.QR:
			text = 'QR: ';
			break;
		case plus.barcode.EAN13:
			text = 'EAN13: ';
			break;
		case plus.barcode.EAN8:
			text = 'EAN8: ';
			break;
	}
	alert(text + result);
}

//打开扫码窗
export const startRecognize = (id, callback) => {
	let scan = new plus.barcode.Barcode(id);
	callback(scan)
	scan.onmarked = onmarked;
	//开始扫码
	scan.start();
	
}

