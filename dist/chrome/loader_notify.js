function fn() {
    window.AudioBackup = window.Audio;
    window.Audio = function() {
      window.MPmentionSound = new window.AudioBackup('https://explodingcamera.xyz/plop.mp3');
      return window.MPmentionSound;
    }
    window.WebSocketBackup = window.WebSocket;
    var sockets = 0;
    var i = 0;
    window.MPsocket = [];
    window.WebSocket = function (val) {
      i++;
      window.MPsocket[i] = new WebSocketBackup(val);
      return window.MPsocket[i];
    }
}
var script = document.createElement('script')
script[script.innerText ? 'innerText' : 'textContent'] = '(' + fn + ')()';
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
