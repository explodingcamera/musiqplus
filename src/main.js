var settings = require('./settings');
var storage = require('./storage');
var $ = require('jquery');
var feature = require("./features");
var chat = require('./chat');
window.jQuery = $;
musiqplus = {};
musiqplus.about = {
  version: '0.0.1',
}

musiqplus.setorage = new Storage(); //TODO
musiqplus.settings = new Settings(); //TODO

musiqplus.main = function () {
  var getChannel = function () {

  }

  var loadUser = function (cb) {


  }

  var initialFuncs = function () {

  }

  $(function () {
      loadUser(function () {
        feature.createSettings(); //TODO
        console.debug('Sucessfully loaded Musiqplus v' + musiqplus.about.version + "!");
        initialFuncs(); //TODO
      })
  })
}

musiqplus.main();
