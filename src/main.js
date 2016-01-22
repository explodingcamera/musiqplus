var settings = require('./settings');
var $ = require('jquery');
var feature = require("./features");
var chat = require('./chat');
var Handlebars = require("hbsfy/runtime");
require('./resources/css/main.css');

global.musiqplus = {
	tmp: {
		autolike: 0,
		autojoin: 0
	}
};

musiqplus.about = {
	version: '0.5.0',
}

musiqplus.settings = new Settings();

musiqplus.main = function() {
	var initHelpers = function () {
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
	var getUser = function() {
		if(API.room.isLoggedIn() == true) {
			musiqplus.User = API.room.getUser();
			initialFuncs();
			return;
		}
		setTimeout(getUser, 1200);
		if(tmp == 2)
			API.chat.system('You need to login to use MusiqPlus!');
		tmp ++;
	 }
	var initialFuncs = function() {
		feature.loadFonts(([ 'Lobster::latin', 'Open+Sans:400,300,700,800,600:latin' ]));
		initHelpers();
		musiqplus.settings.init();
		require('./gui')();
		API.chat.system('Sucessfully loaded Musiqplus v' + musiqplus.about.version + "!");
		API.chat.system('Welcome ' + musiqplus.User.un + "!");
		chat();
		setTimeout(function () {
			if(API.room.getInfo().name == 'Tastycat')
				$('head').append("<style>[data-uid='101']{-webkit-animation: pulse 6s infinite alternate;}</style>");
			else if(API.room.getInfo().name == "Welcome to musiqpad!")
				$('head').append("<style>[data-uid='63']{-webkit-animation: pulse 6s infinite alternate;}</style>");
		}, 2000)
	}
	$(function() {
		getUser()
	});
}
musiqplus.main();
