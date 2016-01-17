var $ = require('jquery');
module.exports = function () {
  var like = function () {
    if(!$('.btn-upvote').hasClass('active'))
      $('.btn-upvote').click()
    setTimeout(like, 1000);
  }
  like();
}
