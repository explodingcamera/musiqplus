var $ = require('jquery');
var func = function () {
  API.on('chat', function(e) {
    if(e.message.indexOf(musiqplus.User.un) != -1 && musiqplus.isAfk == true && musiqplus.tmp.afk != 0) {
      var user = API.room.getUser(e.uid).un;
      if(user != musiqplus.User.un)
        API.chat.send("@" + user + " " + musiqplus.current.ids[musiqplus.settingByTitle['AFKAutoresponse'].id].val);
    }
  });
}

var log = function () {return;};

var checkIfAfk = function () {
  var debugtmp = 0;
  setInterval(function () {
    log(musiqplus.isAfk + " : " + debugtmp);
    debugtmp -= 1;
  }, 1000);
  var tmp = 0;
  var timeout;
  var reset = function () {
    debugtmp = musiqplus.tmp.afk / 1000;
    log('RESET!')
    clearTimeout(timeout);
    musiqplus.isAfk = false;
    var timeout = setTimeout(function () {
      musiqplus.isAfk = true;
    }, musiqplus.tmp.afk);
  }
  $('html').mousemove(function(){
    tmp++;
    if(tmp >= 90) {
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
