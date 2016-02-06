// just temporary, you'll be able to change it later ;D
var audio = new Audio('https://explodingcamera.xyz/plop.mp3');

module.exports = function () {
  checkForPermission();
  musiqplus.notify = function (body, title) {
    if(checkForPermission() == true) {
      var options = {
          body: body,
          icon: 'https://explodingcamera.xyz/128.png'
      }
      var n = new Notification(title, options);
      audio.play();
      setTimeout(n.close.bind(n), 15000);
    }
  }
}

var checkForPermission = function () {
  if (!("Notification" in window))
    alert("This browser does not support system notifications");
  else if (Notification.permission === "granted")
    return true;
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        return true;
      }
      else {
        return false;
      }
    });
  }
}
