// I'll probably redo most of this code someday...

const settings = require('./settings');
const $ = require('jquery');
const feature = require('./features');
const chat = require('./chat');
const Handlebars = require('hbsfy/runtime');
const config = require('../package.json');
require('./resources/css/main.css');

global.musiqplus = {
  tmp: {
    autolike: 0,
    autojoin: 0,
  },
  isAfk: false,
  locale: require('./lang.json'),
};

musiqplus.about = {
  version: config.version,
};

musiqplus.settings = new Settings();

musiqplus.fullscreen = function () {
  var el = $('.video')[0];
  if (el.requestFullScreen) {
    el.requestFullScreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullScreen) {
    el.webkitRequestFullScreen();
  }
};

musiqplus.main = function () {
  var initHelpers = function () {
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

    global.targetTest = [];
    Handlebars.registerHelper('l10n', function (keyword) {
      var lang = (navigator.language) ? navigator.language : navigator.userLanguage;
      lang.split('_');
      if (lang.length > 2)
        lang = lang[0];
      var locale = window.musiqplus.locale[lang] || window.musiqplus.locale.en || window.musiqplus.locale || false;
      if (!locale) return target;
      var target = locale;
      var key = keyword.split('.');
      for (var i in key) {
        target = target[key[i]];
      }

      if (!target) {
        var target = window.musiqplus.locale.en;
        var key = keyword.split('.');
        for (var i in key) {
          target = target[key[i]];
        }
      }

      console.log(target);
      target = target || keyword;
      return target;
    });
  };

  var getUser = function () {
    if (API.room.isLoggedIn() == true) {
      musiqplus.User = API.room.getUser();
      API.chat.system('Welcome ' + musiqplus.User.un + '!');
      return;
    } else {
      setTimeout(getUser, 200);
    }
  };

  var initialFuncs = function () {
    if (typeof MPmentionSound != 'undefined') {
      global.Audio = global.AudioBackup;
    } else {
      global.MPmentionSound = new Audio('https://explodingcamera.xyz/plop.mp3');
    }

    feature.loadFonts((['Lobster::latin', 'Open+Sans:400,300,700,800,600:latin']));
    initHelpers();
    musiqplus.settings.init();
    require('./gui')();
    API.chat.system('Sucessfully loaded Musiqplus v' + musiqplus.about.version + '!');
    API.chat.system('If your community needs a Pad, I can host it for free and/or code custom stuff for a small fee. Discord: mail@explodingcamera.com');
    chat();
    if (feature.validDomain(musiqplus.current.ids[musiqplus.settingByTitle['CustomMention/NotificationSound'].id].val))
      MPmentionSound.src = musiqplus.current.ids[musiqplus.settingByTitle['CustomMention/NotificationSound'].id].val;
    else
      MPmentionSound.src = 'https://explodingcamera.xyz/plop.mp3';
    $('head').append("<style>[data-uid='7'],[data-uid='10']{-webkit-animation: pulse 6s infinite alternate;}</style>");
  };

  getUser();
  initialFuncs();
};

musiqplus.main();
