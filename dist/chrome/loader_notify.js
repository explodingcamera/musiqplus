function fn() {
  if (typeof API === 'object' && typeof API.DATA !== 'undefined') {
    window.AudioBackup = window.Audio;
    if (!window.AudioList)
      window.AudioList = {};
    window.Audio = function (arg) {
      window.AudioList[arg] = new window.AudioBackup(arg);
      return window.AudioList[arg];
    };
  }
}

var script = document.createElement('script');
script[script.innerText ? 'innerText' : 'textContent'] = '(' + fn + ')()';
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
