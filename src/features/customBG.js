var $ = require('jquery');
module.exports = function () {
  console.debug('Selected Background:'+musiqplus.current.ids[musiqplus.settingByTitle['CustomBackground'].id].val);
  if(musiqplus.current.ids[musiqplus.settingByTitle['CustomBackground'].id].val != "")
    $('#room-bg').css('cssText', 'background-image: url(' + musiqplus.current.ids[musiqplus.settingByTitle['CustomBackground'].id].val + ") !important");
}
