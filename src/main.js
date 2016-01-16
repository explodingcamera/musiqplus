var settings = require('./settings');
var $ = require('jquery');
var feature = require("./features");
var chat = require('./chat');
var Handlebars = require("hbsfy/runtime");

global.$ = $;
global.musiqplus = {};

musiqplus.about = {
	version: '0.1.0',
}

//Just for testing
if(typeof API == 'undefined')
	var API = {
		chat: {
			system: function (y) {
				console.debug(y)
			},
			log: function (x ,y) {
				console.debug(y, x);
			}
		},
		room: {
			isLoggedIn: function () {
				return true;
			},
			getUser: function () {
				return "TestUser";
			}
		}
	}
	global.API = API;

musiqplus.settings = new Settings();

musiqplus.main = function() {
	initHelpers = function () {
		// Helper by http://stackoverflow.com/a/16315366/4811589
		Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
		    switch (operator) {
		        case '==':
		            return (v1 == v2) ? options.fn(this) : options.inverse(this);
		        case '===':
		            return (v1 === v2) ? options.fn(this) : options.inverse(this);
		        case '<':
		            return (v1 < v2) ? options.fn(this) : options.inverse(this);
		        case '<=':
		            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
		        case '>':
		            return (v1 > v2) ? options.fn(this) : options.inverse(this);
		        case '>=':
		            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
		        case '&&':
		            return (v1 && v2) ? options.fn(this) : options.inverse(this);
		        case '||':
		            return (v1 || v2) ? options.fn(this) : options.inverse(this);
		        default:
		            return options.inverse(this);
		    }
		});
	}
	getUser = function(cb) {
		if(API.room.isLoggedIn)
			musiqplus.User = API.room.getUser();
		cb();
	}
	initialFuncs = function() {
		feature.loadFonts(([ 'Lobster::latin', "Open+Sans:400,700:latin" ]));
		initHelpers();
		musiqplus.settings.init();
		require('./gui')();
	}
	$(function() {
		getUser(function() {
			API.chat.system('Sucessfully loaded Musiqplus v' + musiqplus.about.version + "!");
			initialFuncs();
		})
	})
}
musiqplus.main();
var lol = require("./resources/css/main.css");
