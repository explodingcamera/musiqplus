var settings = require('./settings');
var $ = require('jquery');
var feature = require("./features");
var chat = require('./chat');
var Handlebars = require("hbsfy/runtime");

global.$ = $;
global.musiqplus = {};

musiqplus.about = {
	version: '0.0.2',
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
	getUser = function(cb) {
		musiqplus.User = $('.user').html();
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
			console.debug('Sucessfully loaded Musiqplus v' + musiqplus.about.version + "!");
			initialFuncs();
		})
	})
}
musiqplus.main();
var lol = require("./resources/css/main.css");
