export default {
  init: function (){
    console.log("初始化百度地图脚本...");
    const AK = "N1AH5Mff519oux5bGOoiWI50EHBKTcy3";
    const apiVersion = "3.0";
    const timestamp = new Date().getTime();
    const BMap_URL = "http://api.map.baidu.com/getscript?v="+ apiVersion +"&ak="+ AK +"&services=&t=" + timestamp;
    return new Promise((resolve, reject) => {
      if(typeof BMap !== "undefined") {
        resolve(BMap);
        return true;
      }

      // 插入script脚本
      let scriptNode = document.createElement("script");
      scriptNode.setAttribute("type", "text/javascript");
      scriptNode.setAttribute("src", BMap_URL);
      document.body.appendChild(scriptNode);

      // 等待页面加载完毕回调
      let timeout = 0;
      let interval = setInterval(()=> {
        // 超时10秒加载失败
        if(timeout >= 20) {
          reject();
          clearInterval(interval);
          console.error("百度地图脚本初始化失败...");
        }
        // 加载成功
        if(typeof BMap !== "undefined") {
          resolve(BMap);
          clearInterval(interval);
          console.log("百度地图脚本初始化成功...");
        }
        timeout += 1;
      }, 500);
    });
  }
}