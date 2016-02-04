var $ = require('jquery');
var interval;
var waitTime;
var func = function () {
  if(API.queue.getPosition() == -1)                               //Not in waitlist
    waitTime = (API.queue.getInfo().length * 242.4) + API.room.getTimeRemaining() ;
  else if(API.queue.getInfo().length >= API.queue.getPosition())  //in Waitlist
    waitTime = ((API.queue.getPosition() * 242.4) - 242.4 )+ API.room.getTimeRemaining();
  waitTime = Math.round(((waitTime / 60) + 0.00001) * 100) / 100;
  var minutes = Math.floor(waitTime);
  var seconds = Math.floor((waitTime - minutes) * 60);
  if(seconds < 10)
    seconds = '0' + seconds.toString();
  $('#mqpeta').remove();
  $('.dash .left').append('<div class="labels" id="mqpeta"><p class="label now" title="Parisyte - Meteor" data-ng-bind="currentSong">&nbsp;&nbsp; ETA: ' +
  minutes + ":" + seconds +
  '</p></div>')
}
module.exports = function (val) {
  if(val == true) {
    setInterval(func, 1000);
  }
  if(val == false) {
    if(api) {
      clearInterval(interval)
      $('#mqpeta').remove();
    }
  }
}
