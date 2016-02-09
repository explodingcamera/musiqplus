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
  if(minutes < 0) {
    minutes = 0;
    seconds = 0;
  }
  $('#mqpeta').remove();
  $('.dash .left').append('<div class="labels" id="mqpeta"><p class="label now" title="ETA" data-ng-bind="currentSong">&nbsp;&nbsp; ETA: ' +
  minutes + ":" + seconds +
  '</p></div>')
}
module.exports = function (val) {
  if(val == true) {
    clearInterval(interval);
    setInterval(func, 300);
  }
  if(val == false) {
    if(api) {
      clearInterval(interval);
      $('#mqpeta').remove();
    }
  }
}
