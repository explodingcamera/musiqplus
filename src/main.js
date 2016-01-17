var settings = require('./settings');
var $ = require('jquery');
var feature = require("./features");
var chat = require('./chat');
var Handlebars = require("hbsfy/runtime");
require('./resources/css/main.css');

global.musiqplus = {};

musiqplus.about = {
	version: '0.2.4',
}

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
	var tmp = 0;
	getUser = function(cb) {
		if(API.room.isLoggedIn() == true) {
			musiqplus.User = API.room.getUser();
			cb();
			return;
		}
		setTimeout(getUser, 1200);
		if(tmp == 2)
			API.chat.system('You need to login to use MusiqPlus!');
		tmp ++;
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
			API.chat.system('Welcome ' + musiqplus.User.un + "!");
			initialFuncs();
		})
	})
}
musiqplus.main();
