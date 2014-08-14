function Window(SnowflakeBrowser) {
	this.init(this, SnowflakeBrowser);
}


Window.prototype.init = function init(self, SnowflakeBrowser) {
	var BrowserWindow = require("browser-window");
	var win = new BrowserWindow({show: false});
	win.loadUrl('file://' + SnowflakeBrowser.baseDirectory + '/index.html');

	// win.uid = SnowflakeBrowser.getUniqueId();
	win.maximize();

	if(SnowflakeBrowser.isDevVersion()) {
		win.setSize(win.getSize()[0], win.getSize()[1] - 125);
	}
	
	//TODO: Close Window needs to actually remove the window from memory... Or 
	// set it ready to be removed or something in case I want to undo it...

	win.on('close', function(e) {
		SnowflakeBrowser.isDevVersion("close");
	});

	win.on('closed', function(e) {
		SnowflakeBrowser.isDevVersion("closed");
		// if(!SnowflakeBrowser.isQuitting) {
		// 	SnowflakeBrowser.db.removeWindowById(win.uid);
		// 	// remove window from database...
		// }
		var index = SnowflakeBrowser.windows.indexOf(self);
		SnowflakeBrowser.consoleLogInDevVersion("window index:" + index);
		SnowflakeBrowser.windows.splice(index, 1);

		win = null;
	});

	win.webContents.on('did-finish-load', function() {
		// if(winData && winData.mainPane) {
		// 	win.webContents.send('createPanes', winData);
		// } else {
		// 	win.webContents.send('createEmptyWindow', win.uid);
		// }
		win.show();
		win.focus();
	});
};

module.exports = Window;