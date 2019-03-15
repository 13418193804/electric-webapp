
// 扩展API加载完毕，现在可以正常调用扩展API

//打开扫码窗
export const startRecognize = (id, callback,onmarked) => {
	let scan = new plus.barcode.Barcode(id);
	callback(scan)
	scan.onmarked = (type, result) => {
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
		onmarked(type , result)
	};
	//开始扫码
	scan.start();
	
}

