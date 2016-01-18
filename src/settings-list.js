var feature = require('./features');
module.exports = function (cb) {
  musiqplus.settingsN = 0;
  musiqplus.settingById = [];
  musiqplus.settingByTitle = [];
  var Setting = function (data) {
    this.options = data.options;
    this.title = data.title;
    this.id = musiqplus.settingsN;
    this.type = data.type;
    this.description = data.description;
    this.titleNoSpaces = this.title.replace(/\s+/g, '');
    musiqplus.settingByTitle[this.title.replace(/\s+/g, '')] = this;
    musiqplus.settingById[this.id] = this;
    this.func = data.function;
    this.defaultVal = data.defaultVal;
    if(data.visibility == 'visible')
      this.visible = true;
    musiqplus.settingsN += 1;
  }
  new Setting({
    visibility: 'visible',
    title: 'AutoLike',
    description: 'Automatically like every Song!',
    type: 'switch',
    defaultVal: true,
    function: function (val) {
      feature.AutoLike(val);
    },
  });
  new Setting({
    visibility: 'visible',
    title: 'AutoJoin',
    description: 'Automatically join the waitlist!',
    type: 'switch',
    defaultVal: false,
    function: function (val) {
      feature.AutoJoin(val)
    },
  });
  new Setting({
    visibility: 'visible',
    title: 'AutoClear Console',
    description: 'Clears Console every minute for better Performance',
    type: 'switch',
    defaultVal: false,
    function: function (val) {
      feature.clearConsole(val);
    },
  });
  new Setting({
    visibility: 'visible',
    title: 'Change Theme',
    description: 'Change the looks of MusiqPad',
    type: 'select',
    options: [{
      name: 'MusiqPlus', //ID 0 
      url: 'https://cdn.explodingcamera.com/mqplus.theme.css',
      id: 0
    },
    {
      name: 'Classic', //ID 1
      url: 'https://cdn.explodingcamera.com/classic.theme.css',
      id: 1
    }],
    defaultVal: 1, //Defaut Theme
    function: function (themeid) {
       feature.changeTheme(themeid);
    },
  });
  /*
  new Setting({
    visibility: 'hidden',
    title: 'Download Button',
    description: 'Download current song as MP3',
    type: 'switch',
    defaultVal: false,
    function: function (val) {
      feature.clearConsole(val);
    },
  });*/
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

  /* Double-Click Translation */

  cb();
}
