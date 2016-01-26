var $ = require('jquery');
var func = function () {
  setTimeout(function () {
    musiqplus.isAfk = false;
  }, 2000);
  API.on('chat', function(e) {
    if(e.message.indexOf(musiqplus.User.un) != -1 && musiqplus.isAfk == true && musiqplus.tmp.afk != 0) {
      var user = API.room.getUser(e.uid).un;
      if(user != musiqplus.User.un)
        API.chat.send("@" + user + " " + musiqplus.current.ids[musiqplus.settingByTitle['AFKAutoresponse'].id].val);
    }
  });
}


var checkIfAfk = function () {
  var debugtmp = 0;
  setInterval(function () {
    //console.log(musiqplus.isAfk + " : " + debugtmp);
    debugtmp -= 1;
  }, 1000);
  var tmp = 0;
  var timeout;
  var reset = function () {
    debugtmp = musiqplus.tmp.afk / 1000;
    clearTimeout(timeout);
    musiqplus.isAfk = false;
    timeout = setTimeout(function () {
      musiqplus.isAfk = true;
    }, musiqplus.tmp.afk);
  }
  $('html').mousemove(function(){
    tmp++;
    if(tmp >= 20) {
        reset();
        tmp = 0;
    }
  });
  $('html').click(function(){
      reset();
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
