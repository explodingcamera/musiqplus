var $ = require('jquery');
module.exports = function (val) {
  var timeout = setTimeout(function (){}, 0);
  var join = function () {
    if($('.btn-join').attr('title') == "Join DJ Queue")
      API.queue.join();
    timeout = setTimeout(join, 1000)
  }
  if(val == true)
    join();
  else
    clearTimeout(timeout);
}
