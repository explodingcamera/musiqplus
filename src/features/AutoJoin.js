var $ = require('jquery');
var id;
module.exports = function (val) {
  var like = function () {
    if ($('.btn-join').attr('title') == 'Join DJ Queue')
      API.queue.join();
    console.log(1);
  };

  if (val == true) {
    setTimeout(like, 200);
    if (musiqplus.tmp.autojoin == 0) {
      id = API.on('advance', function (x) {
        if ($('.btn-join').attr('title') == 'Join DJ Queue')
          API.queue.join();
        console.log(1);
      });

      musiqplus.tmp.autojoin = 1;
    }
  } else if (val == false) {
    if (id) {
      API.off('advance', id);
      musiqplus.tmp.autojoin = 0;
    }
  }
};
