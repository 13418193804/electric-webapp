//打开扫码窗
export const startRecognize = (id, callback) => {
	let scan = new plus.barcode.Barcode(id);
	callback(scan)
	scan.onmarked = onmarked;
	//开始扫码
	scan.start();
	
}

