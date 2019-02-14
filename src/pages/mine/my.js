   
// H5 plus事件处理
function plusReady(){
    // 监听键按下事件
    plus.key.addEventListener("keydown",function(e){
    if(e.keyCode == 4){
      window.myvue.$router.push('/')
      return
    }
    },false);
}