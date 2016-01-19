// ==UserScript==
// @name       MusiqPlus
// @author     explodingcamera
// @website    https://github.com/musiqplus
// @namespace  https://cdn.explodingcamera.com/app.js
// @version    0.4.4
// @description  MusiqPlus is an JS for MusiqPad.com
// @match      http://*/*
// @match      https://*/*
// @copyright  (C) 2016 Henry Gressmann
// ==/UserScript==
function fn() {
  if(typeof API == "object") {
    var mqplus = document.createElement('script');
    mqplus.type = 'text/javascript';
    mqplus.id = 'musiqplus-loader';
    mqplus.src = "https://cdn.explodingcamera.com/app.js";
    document.head.appendChild(mqplus);
  }
}
(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement[scriptElement.innerText ? 'innerText' : 'textContent'] = '(' + fn + ')()';
    document.body.appendChild( scriptElement );
    scriptElement.parentNode.removeChild(scriptElement);
})();
