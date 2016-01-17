module.exports = function () {
  global.console.log = function(x){return;}
  var clearConsole = function () {
    console.clear();
    setTimeout(clearConsole, 1000 * 60  )
    console.debug("Console cleared.");
  }
  clearConsole();
}
