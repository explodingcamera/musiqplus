var $ = require('jquery');
module.exports = function () {
  var join = function () {
    if($('.btn-join').attr('title') == "Join DJ Queue")
      API.queue.join();
    setTimeout(join, 1000)
  }
  join();
}
