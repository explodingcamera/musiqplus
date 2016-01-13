module.exports = function (cb) {
  musiqplus.settingsN = 0;
  musiqplus.settingById = [];
  var Setting = function (data) {
    this.title = data.title;
    this.id = musiqplus.settingsN += 1;
    this.type = data.type;
    this.description = data.description;
    musiqplus.settingById[this.id] = this;
    this.func = data.function;
    this.defaultVal = data.defaultVal;
    if(data.invisible)
      this.hidden = true;
  }
  new Setting({
    title: 'AutoLike',
    description: 'Automatically like every Song!',
    type: 'switch',
    defaultVal: true,
    function: function (val) {
      if(val == true) {
        
      }
    },
  });
  new Setting({
    title: 'AutoJoin',
    description: 'Automatically join the waitlist!',
    type: 'switch',
    defaultVal: true,
    function: function (val) {
      if(val == true) {

      }
    },
  });
  new Setting({
    title: 'Custom Avatars',
    description: 'Enable Custom Avatars! (<a href="#">how to get one</a>)',
    type: 'switch',
    defaultVal: true,
    function: function (val) {
      if(val == true) {

      }
    },
  });
  cb();
}
