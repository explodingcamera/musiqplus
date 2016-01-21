var $ = require('jquery');
var api;
var waitTime;
var func = function () {
  if(API.queue.getPosition() == -1)                               //Not in waitlist
    waitTime = (API.queue.getInfo().length * 242.4) + 242.4 ;
  else if(API.queue.getInfo().length >= API.queue.getPosition())  //in Waitlist
    waitTime = (API.queue.getPosition() * 242.4);

  console.log(waitTime);
  $('#mqpeta').remove();
  $('.dash .left').append('<div class="labels" id="mqpeta"><p class="label now" title="Parisyte - Meteor" data-ng-bind="currentSong">&nbsp;&nbsp; ETA: ' +
  Math.round(((waitTime / 60) + 0.00001) * 100) / 100 +
  'min</p></div>')
}
module.exports = function (val) {
  if(val == true) {
    func();
    api = API.on("advance", function(x){
      func()
    });
  }
  if(val == false) {
    if(api) {
      API.off("advance", api);
      $('#mqpeta').remove();
    }
  }
}
