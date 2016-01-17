module.exports = function (val) {
  var timeout = setTimeout(function (){}, 0);
  global.console.log = function(x){return;}
  var clearConsole = function () {
    console.clear();
    timeOut = setTimeout(clearConsole, 1000 * 60);
    console.debug("Console cleared.");
  }
  if(val == true)
  clearConsole();
  else
    clearTimeout(timeout);
}
