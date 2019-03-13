
//全局Zoom
const Zoom = 20;


/**
 *  浏览器定位
 *  关于状态码
    BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
    BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
    BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
    BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
    BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
    BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
    BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
    BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
    BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
 */
const getCurrentPosition = (map, callback) => {
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            // var mk = new BMap.Marker(r.point);
            // map.addOverlay(mk);
            // map.panTo(r.point);
            callback(r.point)
        }
        else {
            callback('北京')
        }
    }, { enableHighAccuracy: true })
}

export const setPoint = (map, longitude, latitude) => {
    setPosition(null)
    setTimeout(() => {
        let point = new BMap.Point(longitude, latitude);
        // var marker = new BMap.Marker(point);// 创建标注
        // map.addOverlay(marker);             // 将标注添加到地图中
        // marker.disableDragging();
        var myIcon = new BMap.Icon("data:image/png;base64,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", new BMap.Size(50, 50));
        var marker2 = new BMap.Marker(pt, { icon: myIcon });  // 创建标注
        map.addOverlay(marker2);
        map.centerAndZoom(point, Zoom);
        setPosition(point)
    }, 500)
}

export const setIcon = (map, longitude, latitude) => {
    setPosition(null)
    setTimeout(() => {
        let point = new BMap.Point(longitude, latitude);
        var myIcon = new BMap.Icon("data:image/png;base64,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", new BMap.Size(50, 50));
        var marker2 = new BMap.Marker(point, { icon: myIcon });  // 创建标注
        map.addOverlay(marker2);
        map.centerAndZoom(point, Zoom);
        setPosition(point)
    }, 500)
}



export const init = (callback) => {
    let map = new BMap.Map("l-map");
    callback(map)
    // getCurrentPosition(map, point => {
      
    // })

    var pt = new BMap.Point(106.515893, 29.602414);
    // map.centerAndZoom('北京', Zoom);
    map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();



    // var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
    //     {
    //         "input": "suggestId"
    //         , "location": map
    //     });


    // ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
    //     var str = "";
    //     var _value = e.fromitem.value;
    //     var value = "";
    //     if (e.fromitem.index > -1) {
    //         value = _value.province + _value.city + _value.district + _value.street + _value.business;
    //     }
    //     str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

    //     value = "";
    //     if (e.toitem.index > -1) {
    //         _value = e.toitem.value;
    //         value = _value.province + _value.city + _value.district + _value.street + _value.business;
    //     }
    //     str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
    //     G("searchResultPanel").innerHTML = str;
    // });


    // ac.addEventListener("onconfirm", function (e) { //鼠标点击下拉列表后的事件
    //     var _value = e.item.value;
    //     myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
    //     let menpai = _value.district + _value.street + _value.business
    //     G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
    //     setPlace(map, myValue);
    // });


}

function G(id) {
    return document.getElementById(id);
}


const position = null


export const setPosition = (position) => {
    return this.position = position
}

export const getPosition = () => {
    return this.position
}




export const setPlace = (map, myValue) => {

    map.clearOverlays();    //清除地图上所有覆盖物
    setPosition(null)
    function myFun() {
        if (local.getResults()) {
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            setPosition(pp)
            map.addOverlay(new BMap.Marker(pp));    //添加标注
        } else {

        }



    }
    var local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: myFun
    });
    local.search(myValue);
}