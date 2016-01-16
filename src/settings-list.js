var feature = require('./features');
module.exports = function (cb) {
  musiqplus.settingsN = 0;
  musiqplus.settingById = [];
  musiqplus.settingByTitle = [];
  var Setting = function (data) {
    this.title = data.title;
    this.id = musiqplus.settingsN;
    this.type = data.type;
    this.description = data.description;
    this.titleNoSpaces = this.title.replace(/\s+/g, '');
    musiqplus.settingByTitle[this.title.replace(/\s+/g, '')] = this;
    musiqplus.settingById[this.id] = this;
    this.func = data.function;
    this.defaultVal = data.defaultVal;
    if(data.invisible)
      this.hidden = true;
     musiqplus.settingsN += 1;
  }
  new Setting({
    title: 'AutoLike',
    description: 'Automatically like every Song!',
    type: 'switch',
    defaultVal: true,
    function: function (val) {
      if(val == true) {
        feature.AutoLike()
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
        feature.AutoJoin()
      }
    },
  });
  /*new Setting({
    title: 'Custom Avatars',
    description: 'Enable Custom Avatars! (<a href="#">how to get one</a>)',
    type: 'switch',
    defaultVal: true,
    function: function (val) {
      if(val == true) {

      }
    },
  });*/

  /* Emote Menu */

  /* Custom Emotes (serverside) */

  /* Double-Click Translation */

  /* Don't show up online */
  cb();
}
