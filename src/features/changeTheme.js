var $ = require('jquery');
module.exports = function (theme) {
  $('#mqpluscustomstyle').remove();
  $('head').append('<link id="mqpluscustomstyle" rel="stylesheet" href="' + musiqplus.settingByTitle['ChangeTheme'].options[theme].url + '" media="screen" title="no title" charset="utf-8">');
  console.debug('Theme: ' + musiqplus.settingByTitle['ChangeTheme'].options[theme].name);
};
