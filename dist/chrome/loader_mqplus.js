function fn() {
    window.AudioBackup = window.Audio;
    window.Audio = function() {
      return new window.AudioBackup('https://explodingcamera.xyz/the_tardis.mp3');
    }
    if(typeof API == "object") {
      var mqplus = document.createElement('script');
      mqplus.type = 'text/javascript';
      mqplus.id = 'musiqplus-loader';
      mqplus.src = "https://explodingcamera.xyz/app.js";
      document.head.appendChild(mqplus);
    }
}
var script = document.createElement('script')
script[script.innerText ? 'innerText' : 'textContent'] = '(' + fn + ')()';
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
