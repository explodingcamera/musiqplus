var $ = require('jquery');
global.$ = $;
module.exports = function () {
  console.debug(musiqplus.current.ids[musiqplus.settingByTitle['CustomBackground'].id].val);
  $('body').css('background-image', 'url(' + musiqplus.current.ids[musiqplus.settingByTitle['CustomBackground'].id].val + ")")
}
