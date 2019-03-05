


export const setPoint = (map, latitude, longitude) => {
    setPosition(null)
    setTimeout(() => {
        let point = new BMap.Point(longitude, latitude);
        var marker = new BMap.Marker(point);// 创建标注
        map.addOverlay(marker);             // 将标注添加到地图中
        marker.disableDragging();
        map.centerAndZoom(point, 18);
        setPosition(point)
    },500)
}


export const init = (callback) => {
    let map = new BMap.Map("l-map");
    callback(map)
    map.centerAndZoom("北京", 18);
    map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
            "input": "suggestId"
            , "location": map
        });


    ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });


    ac.addEventListener("onconfirm", function (e) { //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        let menpai = _value.district + _value.street + _value.business
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
        setPlace(map, myValue);
    });


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