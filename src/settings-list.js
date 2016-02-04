var $ = require('jquery');
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
    description: 'Disables Console',
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
    },
    {
      name: 'Plug', //ID 2
      url: 'https://cdn.explodingcamera.com/plug.theme.css',
      id: 2
    },
    {
      name: 'NCS Theme by bentenz5', //ID 3
      url: 'https://cdn.rawgit.com/bentenz5/NCS/master/NCSTheme.css',
      id: 3
    }],
    defaultVal: 1, //Defaut Theme
    function: function (themeid) {
       feature.changeTheme(themeid);
    },
  });
  new Setting({
    visibility: 'visible',
    title: 'Download Song',
    description: 'Download current song as MP3. You can also use the <div class="mdi mdi-download"></div> Download Button on the player.',
    type: 'dlibtn',
    defaultVal: true,
    function: function (val) {
      feature.downloadSong();
    },
  });
  new Setting({
    visibility: 'visible',
    title: 'Custom Background',
    description: 'Change the Background! Leave clear to use default of theme.',
    type: 'textinput',
    defaultVal: '',
    function: function (val) {
      feature.customBG();
    },
  });

  new Setting({
    visibility: 'visible',
    title: 'DJ ETA',
    description: 'Estimated wait time, updates after every song.',
    type: 'switch',
    defaultVal: true,
    function: function (val) {
      feature.djETA(val);
    },
  });

  new Setting({
    visibility: 'visible',
    title: 'AFK Autoresponse',
    description: 'Automaticaly respond to messages after you were afk for x amount of Time.',
    type: 'autoafk',
    defaultVal: '',
    function: function (val) {
      feature.afkResponse(val);
      setTimeout(function () {
        $('#mqplusafk').val(val);
        $('#mqplusafk').change(function () {
          console.log(1);
          musiqplus.current.ids[musiqplus.settingByTitle['AFKAutoresponse'].id].val = $(this)[0].value;
          musiqplus.settings.save();
        })
      }, 1200)
    },
  });
  new Setting({
    visibility: 'hidden',
    title: 'mqplusafktime',
    description: '',
    type: 'none',
    defaultVal: '10',
    function: function (val) {
      setTimeout(function () {
        $('#mqplusafktime').val(val);
        musiqplus.tmp.afk = val * 1000 * 60
        $('#mqplusafktime').change(function () {
          musiqplus.current.ids[musiqplus.settingByTitle['mqplusafktime'].id].val = $(this)[0].value;
          musiqplus.settings.save();
          musiqplus.tmp.afk = $(this)[0].value * 1000 * 60;
        })
      }, 1200);
    },
  });
  new Setting({                                                                 //TODO---
    visibility: 'visible',
    title: 'Import Playlist',
    description: 'Imports a playlist from YouTube. You need to reload your Page to see the new Playlist in your Settings.',
    type: 'importPlaylist',
    defaultVal: '',
    function: function (val) {
      feature.importPlaylist();
    },
  });
  cb();
}
