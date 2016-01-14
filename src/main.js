var settings = require('./settings');
var $ = require('jquery');
var feature = require("./features");
var chat = require('./chat');

global.$ = $;
global.musiqplus = {};

musiqplus.about = {
	version: '0.0.1',
}

musiqplus.settings = new Settings();

musiqplus.main = function() {
	getUser = function(cb) {
		musiqplus.User = $('.user').html();
		cb();
	}
	initialFuncs = function() {
		feature.loadFonts(([ 'Lobster::latin', "Open+Sans:400,700:latin" ]));
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
