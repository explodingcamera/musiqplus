var $ = require('jquery');
var feature = require('./features');
var gui = function () {
  $('.navbar').append(require('./templates/iconDl.hbs'));
  $('.logo-dash').append(require('./templates/icon.hbs'));
  $('body').append(require('./templates/settings.hbs')({
    setting: musiqplus.settingById
  }));
  $('.option-mqpChangeTheme .mqplusinput').append(require('./templates/select.hbs')({
    theme: musiqplus.settingByTitle['ChangeTheme'].options
  }));

  for (var i = 0; i < musiqplus.settingById.length; i++) {
    if(musiqplus.current.ids[i].val == true)
      $("#" + musiqplus.settingById[i].titleNoSpaces).prop('checked', true);
  }
  $('#mqplusnav a').click(function () {
    if(!$(this).hasClass('mqplusactive')) {
      $("#mqpluscontent .mqplusactive").fadeOut(300);
      $(".mqplusactive").delay(600).toggleClass('mqplusactive');
      $(this).delay(300).toggleClass('mqplusactive');
      $("#mqp" + $(this).html()).toggleClass('mqplusactive').delay(300).fadeIn();
    }
  });
  $('.mqpluscheckbox').change(function () {
    if ($(this).is(":checked")) {
      musiqplus.settingByTitle[$(this).attr('id')].func(true);
      musiqplus.current.ids[musiqplus.settingByTitle[$(this).attr('id')].id].val = true;
    }
    else {
      musiqplus.current.ids[musiqplus.settingByTitle[$(this).attr('id')].id].val = false;
      musiqplus.settingByTitle[$(this).attr('id')].func(false);
    }
    musiqplus.settings.save();
  });
  $("#mqpthemeselect").change(function () {
    console.log($("#mqpthemeselect option:selected").data('theme-url'));
  });
  $('#mqpthemeselect').change(function () {
    musiqplus.current.ids[musiqplus.settingByTitle["ChangeTheme"].id].val = parseInt($('#mqpthemeselect option:selected').attr('data'));
    require('./features').changeTheme(musiqplus.current.ids[musiqplus.settingByTitle["ChangeTheme"].id].val);
    musiqplus.settings.save();
  })
  $("#mqp"+ musiqplus.settingByTitle["ChangeTheme"].options[musiqplus.current.ids[musiqplus.settingByTitle["ChangeTheme"].id].val].name).attr('selected','selected');
  $('#mqplusbg').change(function () {
    if (feature.validDomain($(this)[0].value)) {
      console.debug(1);
      musiqplus.current.ids[musiqplus.settingByTitle['CustomBackground'].id].val = $(this)[0].value;
      feature.customBG();
      musiqplus.settings.save();
    }
  })
  $('#mqplusbg').val(musiqplus.current.ids[musiqplus.settingByTitle['CustomBackground'].id].val);
}
module.exports = gui;
musiqplus.toggleSettings = function () {
  $('#mqplussettings').slideToggle()
}
