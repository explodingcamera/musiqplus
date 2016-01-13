module.exports = function () {
  musiqplus.settingsN = 0;
  musiqplus.settingById = [];
  var Setting = function (data) {
    this.title = data.title;
    this.id = musiqplus.settingsN += 1;
    this.type = data.type;
    this.description = data.description;
    musiqplus.SettingsById[this.id]=this;
    this.function = data.function;
    this.defaultVal = data.defaultVal;
  }
  new Setting({
    title: 'AutoLike',
    description: 'Automatically like every Song!',
    type: '',
    defaultVal: true,
    function: function (val) {
    },
  });
}
