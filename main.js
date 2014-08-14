var SnowflakeBrowser = {};
SnowflakeBrowser.developmentVersion = "SNOWFLAKE_DEVELOPMENT";
SnowflakeBrowser.releaseVersion = "SNOWFLAKE_RELEASE";

SnowflakeBrowser.version = SnowflakeBrowser.developmentVersion;

SnowflakeBrowser.isDevVersion = function isDevVersion() {
	return (SnowflakeBrowser.version === SnowflakeBrowser.developmentVersion);
};

SnowflakeBrowser.consoleLogInDevVersion = function consoleLogInDevVersion(message) {
	if(SnowflakeBrowser.isDevVersion()) {
		console.log(message);
	}
};

SnowflakeBrowser.setup = {};

SnowflakeBrowser.setup.setupRequiredObjects = function setupRequiredObjects() {
	SnowflakeBrowser.baseDirectory = __dirname;

	SnowflakeBrowser.app = require("app");
	SnowflakeBrowser.Window = require(SnowflakeBrowser.baseDirectory + "/js/browser/Window.js");

	//TODO: don't bother making these variables at the start and keeping them in memory - make them on the fly as needed until/unless it becomes a bottleneck...

	// SnowflakeBrowser.fs = require("fs");
	// SnowflakeBrowser.ipc = require("ipc");

	// SnowflakeBrowser.BrowserWindow = require("browser-window");
	// SnowflakeBrowser.Menu = require("menu");

	// SnowflakeBrowser.Database = require(SnowflakeBrowser.baseDirectory + "/js/browser/Database.js");
	// SnowflakeBrowser.Project = require(SnowflakeBrowser.baseDirectory + "/js/browser/Project.js");

	SnowflakeBrowser.isQuitting = false;
	// SnowflakeBrowser.db = new SnowflakeBrowser.Database();
	SnowflakeBrowser.windows = [];
};

SnowflakeBrowser.setup.setupMainMenu = function setupMainMenu() {
	// var MainMenu = require(SnowflakeBrowser.baseDirectory + "/js/browser/mainMenu.js");
	// var mainMenu = MainMenu.getMainMenu(SnowflakeBrowser);

	// SnowflakeBrowser.Menu.setApplicationMenu(SnowflakeBrowser.Menu.buildFromTemplate(mainMenu));
	//TODO: loop through the menu to create the main commander...
};

SnowflakeBrowser.setup.setupCommands = function setupCommands() {
	// var cmdsSetup = require(SnowflakeBrowser.baseDirectory + "/js/browser/commands/commandsSetup.js");
	// cmdsSetup.setupCommands(SnowflakeBrowser);
};

SnowflakeBrowser.setup.setupUtils = function setupUtils() {
	// var utils = require(SnowflakeBrowser.baseDirectory + "/js/browser/utils.js");
	// utils.getUtilFunctions(SnowflakeBrowser);
};

SnowflakeBrowser.setup.setupAppEvents = function setupAppEvents () {
	SnowflakeBrowser.app.on("window-all-closed", function() {
		if (process.platform != "darwin") {
			SnowflakeBrowser.app.quit();
		}
	});

	SnowflakeBrowser.app.on("will-quit", function(e) {
		SnowflakeBrowser.consoleLogInDevVersion("main.js, app.on('will-quit')");
	});

	SnowflakeBrowser.app.on("ready", function() {
		SnowflakeBrowser.windows.push(new SnowflakeBrowser.Window(SnowflakeBrowser));

		// SnowflakeBrowser.db.getStartupWindowUids(function(windowUids) {
		// 	if(windowUids && windowUids.length > 0) {
		// 		for(var i = 0; i < windowUids.length; i++) {
		// 			SnowflakeBrowser.db.getWindowFromUid(windowUids[i], function(win) {
		// 				SnowflakeBrowser.Commands.File.newWindow(win);
		// 			});
		// 		}
		// 	} else {
		// 		SnowflakeBrowser.Commands.File.newWindow();
		// 	}
		// });
	});
};

SnowflakeBrowser.setup.setupReceivableCommands = function setupReceivableCommands() {
	// var clientCommands = require(SnowflakeBrowser.baseDirectory + "/js/browser/receiveClientCommands.js");
	// clientCommands.setupReceivableCommands(SnowflakeBrowser);
};

SnowflakeBrowser.setup.initialize = function initialize() {
	require("crash-reporter").start(); // Report crashes to server.

	SnowflakeBrowser.setup.setupRequiredObjects();
	SnowflakeBrowser.setup.setupCommands();
	SnowflakeBrowser.setup.setupUtils();
	SnowflakeBrowser.setup.setupMainMenu();
	SnowflakeBrowser.setup.setupReceivableCommands();
	SnowflakeBrowser.setup.setupAppEvents();
	
};

SnowflakeBrowser.setup.initialize();
SnowflakeBrowser.setup = null;