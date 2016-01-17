var $ = require('jquery');
module.exports = function (val) {
  var timeout = setTimeout(function (){}, 0);
  var like = function () {
    if(!$('.btn-upvote').hasClass('active'))
      $('.btn-upvote').click()
    timeout = setTimeout(like, 1000);
  }
  if(val == true)
    like();
  else
    clearTimeout(timeout);
}
