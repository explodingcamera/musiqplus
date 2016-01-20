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
new Setting({                             //Not supported anymore but I don't want to destroy peoples save data.
    visibility: 'hidden',
    title: 'AutoClear Console',
    description: 'Disables Console',
    type: 'switch',
    defaultVal: false,
    function: function (val) {
      //feature.clearConsole(val);
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

  /* Double-Click Translation */

  cb();
}
