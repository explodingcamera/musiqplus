function fn() {
    window.AudioBackup = window.Audio;
    window.Audio = function() {
      window.MPmentionSound = new window.AudioBackup('https://explodingcamera.xyz/plop.mp3');
      return window.MPmentionSound;
    }
}
var script = document.createElement('script')
script[script.innerText ? 'innerText' : 'textContent'] = '(' + fn + ')()';
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
