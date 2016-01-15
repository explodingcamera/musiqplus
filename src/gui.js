var gui = function () {
  $('body').append(require('./templates/settings.hbs')({
    setting: musiqplus.settingById,
  }));
  for (var i = 1; i < musiqplus.settingById.length + 1; i++) {
    if(musiqplus.current.ids[i].val == true)
      $("#" + musiqplus.settingById[i-1].titleNoSpaces).prop('checked', true);
  }
  $('#mqplusnav a').click(function () {
    if(!$(this).hasClass('mqplusactive')) {
      $("#mqpluscontent .mqplusactive").fadeOut(300);
      $(".mqplusactive").delay(300).toggleClass('mqplusactive');
      $(this).delay(300).toggleClass('mqplusactive');
      $("#mqp" + $(this).html()).toggleClass('mqplusactive').delay(300).fadeIn();
    }
  });
  $('.mqpluscheckbox').change(function () {
    if ($(this).is(":checked")) {
      musiqplus.settingByTitle[$(this).attr('id')].func(true);
      musiqplus.current.ids[musiqplus.settingByTitle[$(this).attr('id')].id + 1].val = true;
    }
    else
      musiqplus.current.ids[musiqplus.settingByTitle[$(this).attr('id')].id + 1].val = false;
    musiqplus.settings.save();
  })
}
module.exports = gui;
musiqplus.toggleSettings = function () {
  $('#mqplussettings').slideToggle()
}
