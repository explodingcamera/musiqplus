var gui = function () {
  $('body').append(require('./templates/settings.hbs'));
  $("#mqplussettings").click(function () {

  });
  $('#mqplusnav a').click(function () {
    if(!$(this).hasClass('mqplusactive')) {
      $("#mqpluscontent .mqplusactive").fadeOut(300);
      $(".mqplusactive").delay(300).toggleClass('mqplusactive');
      $(this).delay(300).toggleClass('mqplusactive');
      $("#mqp" + $(this).html()).toggleClass('mqplusactive').delay(300).fadeIn();
    }
  });
}
module.exports = gui;
musiqplus.toggleSettings = function () {
  $('#mqplussettings').slideToggle()
}
