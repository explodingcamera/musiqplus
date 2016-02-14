var $ = require('jquery');
var id;
module.exports = function (val) {
  var like = function () {
    if(!$('.btn-upvote').hasClass('active'))
    $('.btn-upvote').click()
  }
  if(val == true) {
    setTimeout(like, 1000);
    if(musiqplus.tmp.autolike == 0){
      id = API.on("advance", function(x){
        if(!$('.btn-upvote').hasClass('active'))
        $('.btn-upvote').click()
      });
      musiqplus.tmp.autolike = 1;
    }
  }
  else if(val == false) {
    if(id){
      API.off("advance", id);
      musiqplus.tmp.autolike = 0;
    }
  }
}
