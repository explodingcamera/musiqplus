var api;
module.exports = function (val) {
  if (val == true) {
    api = API.on('advance', function (data) {
      musiqplus.notify('Last Song: ' + data.last.song.title + '\n Next Song: ' + data.next.song.title, 'Musiqplus');
    });
  } else {
    API.off('advance', api);
  }
};
