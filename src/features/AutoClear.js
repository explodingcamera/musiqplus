module.exports = function (val) {
  var timeout = setTimeout(function (){}, 0);
  global.consoleBackup = console;
  global.console = {
    log: function () {
      return;
    },
    debug: function () {
      return;
    },
    error: function () {
      return;
    }
  };

  var clearConsole = function () {
    console.clear();
    timeOut = setTimeout(clearConsole, 1000 * 60);
  }
  if(val == true)
  clearConsole();
  else
    clearTimeout(timeout);
}
