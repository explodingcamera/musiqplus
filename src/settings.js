var cookie = require('cookies-js');
module.exports = Settings = function() {}
Settings.prototype.init = function() {
	require('./settings-list')(function() {
		if (cookie.get('mqp') == undefined) musiqplus.settings.create();
		else if (JSON.parse(cookie.get('mqp')).version != musiqplus.about.version)
			musiqplus.settings.upgrade();
		else musiqplus.settings.load();
	});
}
Settings.prototype.load = function() {
	musiqplus.current = JSON.parse(cookie.get('mqp'));
	for (var i = 1; i < musiqplus.settingById.length; i++) {
		musiqplus.settingById[i].func(musiqplus.current.ids[i].val);
	}
	console.debug('Settings Successfuly loaded/created!');
}
Settings.prototype.save = function() {
	cookie.set('mqp', JSON.stringify(musiqplus.current), {
		expires: '01/01/2018'
	})
}
Settings.prototype.get = function(data) {
	if (data == undefined) return 'error';
}
Settings.prototype.create = function() {
	var SettingsTemplate = {
		version: musiqplus.about.version,
		ids: {}
	}
	for (var i = 1; i < musiqplus.settingById.length; i++) {
		SettingsTemplate.ids[i] = {};
		SettingsTemplate.ids[i].val = musiqplus.settingById[i].defaultVal;
		SettingsTemplate.ids[i].type = musiqplus.settingById[i].type;
	}
	cookie.set('mqp', JSON.stringify(SettingsTemplate), {
		expires: '01/01/2018'
	});
	musiqplus.settings.load();
}
Settings.prototype.upgrade = function() {
	musiqplus.settings.load();
}
