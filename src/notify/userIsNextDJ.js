var api;
module.exports = function (val) {
  if(val == true) {
    api = API.on("advance", function(x){
      if(musiqplus.current.ids[musiqplus.settingByTitle["EnableNotifications"].id].val == true && API.queue.getPosition() == 1) {
        musiqplus.notify("Your selected Song will be played in " + Math.floor(API.room.getTimeRemaining() / 60) +" Minutes!", "You're the 1st in the queue!");
      }
    });
  }
  else {
    API.off("advance", api);
  }
}
