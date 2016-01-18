var $ = require('jquery');
var id;
module.exports = function (val) {
  console.debug(val + musiqplus.tmp.autolike);
  var like = function () {
    if(!$('.btn-upvote').hasClass('active'))
    $('.btn-upvote').click()
    console.log(1);
  }
  if(val == true) {
    setTimeout(like, 200);
    if(musiqplus.tmp.autolike == 0){
      id = API.on("advance", function(x){
        if(!$('.btn-upvote').hasClass('active'))
        $('.btn-upvote').click()
        console.log(1);
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
