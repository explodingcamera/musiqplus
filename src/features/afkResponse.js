var $ = require('jquery');
var func = function () {
  API.on('chat', function(e) {
    if(e.message.indexOf(musiqplus.User.un) > -1 && /*e.message.indexOf(musiqplus.User.uid) == -1*/ && musiqplus.isAfk == true && musiqplus.tmp.afk != 0) {
      var user = API.room.getUser(e.uid).un;
      if(user == "explodingcamera")
        API.chat.send("@" + user + " " + musiqplus.current.ids[musiqplus.settingByTitle['AFKAutoresponse'].id].val);
    }
    if(e.message.indexOf(musiqplus.User.uid) == -1)
      musiqplus.isAfk = false;
  });
}

var checkIfAfk = function () {
  var tmp = 0;
  var timeout;
  var reset = function () {
    clearTimeout(timeout);
    musiqplus.isAfk = false;
    var timeout = setTimeout(function () {
      musiqplus.isAfk = true;
    }, musiqplus.tmp.afk);
  }
  $('html').mousemove(function(){
    tmp++;
    if(tmp >= 150) {
        reset();
        tmp = 0;
    }
  });
  reset();
}
module.exports = function () {
  func();
  $('mqplusafk').change(function () {
    musiqplus.current.ids[musiqplus.settingByTitle['AFKAutoresponse'].id].val = $(this)[0].value;
    musiqplus.settings.save();
  });
  checkIfAfk();
}
