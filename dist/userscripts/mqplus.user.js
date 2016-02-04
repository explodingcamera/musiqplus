// ==UserScript==
// @name       MusiqPlus
// @author     explodingcamera
// @website    https://github.com/musiqplus
// @namespace  https://explodingcamera.xyz/app.js
// @version    3
// @description  MusiqPlus is an JS for MusiqPad.com
// @match      http://*/*
// @match      https://*/*
// @copyright  (C) 2016 Henry Gressmann
// ==/UserScript==
function fn() {
  if(typeof API != "undefined" && typeof API.DATA == "object")
    $.getScript('https://cdn.explodingcamera.com/app.js');
}
(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement[scriptElement.innerText ? 'innerText' : 'textContent'] = '(' + fn + ')()';
    document.body.appendChild( scriptElement );
    scriptElement.parentNode.removeChild(scriptElement);
})();
