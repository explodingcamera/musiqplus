var api;
module.exports = function (val) {
  if(val == true) {
    api = API.on("chat", function(e){
      if(e.message.indexOf(musiqplus.User.un) != -1) {
        var user = API.room.getUser(e.uid).un;
        musiqplus.notify(e.message, '@'+user+ ' mentioned you:');
      }
    });
  }
  else {
    API.off("chat", api);
  }
}
