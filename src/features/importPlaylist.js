var $ = require('jquery');
module.exports = function () {
  global.musiqplus.importPlaylist = function (playlist) {
    if (playlist) {
      var playlist = $('mqplusplaylist')[0].value;
      if (playlist.length > 34) {
        var reg = new RegExp('[&?]list=([a-z0-9_]+)', 'i');
        var match = reg.exec(playlist);
        playlist = match[1];
      }

      API.playlist.import(playlist);
    }

    $('#mqplusplaylistbtn').click(function () {
      var playlist = $('#mqplusplaylist')[0].value;
      if (playlist.length > 34) {
        var reg = new RegExp('[&?]list=([a-z0-9_]+)', 'i');
        var match = reg.exec(playlist);
        playlist = match[1];
      }

      API.playlist.import(playlist);
    });
  };
};
