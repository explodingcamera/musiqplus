var cookie = require('cookies-js');
module.exports = Settings = function () {

}
Settings.prototype.init = function () {
  if(cookie.get('mqp') == undefined)
    this.create()
  else
    this.load()
}
Settings.prototype.load = function () {
  console.log(1);
}
Settings.prototype.save = function () {
}
Settings.prototype.get = function () {
}
Settings.prototype.open = function () {
};
Settings.prototype.create = function () {
  console.log(2);
};
