module.exports = function (val) {
  var timeout = setTimeout(function () {}, 0);

  var clearConsole = function () {
    consoleBackup.clear();
    timeOut = setTimeout(clearConsole, 1000 * 60);
  };

  if (val == true) {
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
      },
    };
    clearConsole();
  } else
    clearTimeout(timeout);
};
