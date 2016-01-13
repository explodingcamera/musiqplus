var settings = require('./settings');
var $ = require('jquery');
var feature = require("./features");
var chat = require('./chat');
window.jQuery = $;
musiqplus = {};
musiqplus.about = {
  version: '0.0.1',
}

musiqplus.settings = new Settings();
musiqplus.main = function () {
  getUser = function (cb) {
    musiqplus.User = $('.user').html();
    cb();
  }
  initialFuncs = function () {
    musiqplus.settings.init();
    require('./gui')();
  }
  $(function () {
      getUser(function () {
        console.debug('Sucessfully loaded Musiqplus v' + musiqplus.about.version + "!");
        initialFuncs();
      })
  })
}
musiqplus.main();
