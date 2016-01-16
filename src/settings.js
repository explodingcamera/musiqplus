var cookie = require('cookies-js');
module.exports = Settings = function() {
}

Settings.prototype.init = function() {
	require('./settings-list')(function() {
		if (typeof cookie.get('mqp') == 'undefined')
			musiqplus.settings.create();
		else if (JSON.parse(cookie.get('mqp')).version != musiqplus.about.version)
			musiqplus.settings.upgrade();
		else musiqplus.settings.load(JSON.parse(cookie.get('mqp')));
	});
}

Settings.prototype.load = function(data) {
	musiqplus.current = data;
	for (var i = 0; i < musiqplus.settingById.length; i++) {
		musiqplus.settingById[i].func(musiqplus.current.ids[i+1].val);
	}
	console.debug('Settings Successfuly loaded/created!');
}

Settings.prototype.save = function() {
	cookie.expire('mqp');
	cookie.set('mqp', JSON.stringify(musiqplus.current), {
		expires: '01/01/2018'
	});
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
	musiqplus.settings.load(JSON.parse(cookie.get('mqp')));
}

Settings.prototype.upgrade = function() {
	var data = JSON.parse(cookie.get('mqp'));
	data["version"] = musiqplus.about.version;
	for (var i = 1; i < musiqplus.settingById.length; i++) {
		if(data.ids[i] == undefined) {
			data.ids[i] = {};
			data.ids[i].val = musiqplus.settingById[i].defaultVal;
			data.ids[i].type = musiqplus.settingById[i].type;
		}
	}
	musiqplus.settings.save();
	musiqplus.settings.load(data);
}
