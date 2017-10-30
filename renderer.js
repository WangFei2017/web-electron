// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var webview = document.getElementById("mainView");

// webview.src = 'http://127.0.0.1:3001/';
webview.src = 'https://www.baidu.com/';

document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    console.log(e , e.keyCode);
    if(e && e.keyCode==116){ // 按 F5
		webview.reloadIgnoringCache();
	}
};

/**
 * 页面加载完成后监听通道消息
 * @param  {[type]} ){	console.log(webview);	webview.openDevTools();	webview.addEventListener('ipc-message', function(event) {	  console.log(event.channel);	});	webview.send('ping')} [description]
 * @return {[type]}                                                                                           [description]
 */
webview.removeEventListener("dom-ready", function(){});
webview.addEventListener("dom-ready", function(){
// 	console.log(webview);
	// webview.openDevTools(); //打开控制台
// 	webview.addEventListener('ipc-message', function(event) {
// 		console.log(event.channel, event.args);
// 		if(event.channel=='qqsendmsg'){
// 			execQqsendmsg(event.args);
// 		}
// 	});
// 	// 向页面发送数据
// 	webview.send('ready', {a:1,b:2});
});