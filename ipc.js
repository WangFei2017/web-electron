var child_process = require('child_process');
window.sendQImMsg = function(param){
	return child_process.spawn(__dirname+'./imsg', param, {encoding: 'utf-8'});
}

// ipcRenderer.on('ready', function(event, data) {
//   console.log('页面加载完成', event, data);
//   // 执行命令
//   // ipcRenderer.sendToHost('qqsendmsg', '20928030#送水大王#打扰了，我在调试程序，请别介意^_^#1');
// });
