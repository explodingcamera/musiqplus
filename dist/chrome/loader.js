function fn() {
    if(typeof API == "object" && API.room) {
      var mqplus = document.createElement('script');
      mqplus.type = 'text/javascript';
      mqplus.id = 'plugCubed-loader';
      mqplus.src = "https://cdn.rawgit.com/musiqplus/musiqplus/master/dist/js/app.js";
      document.head.appendChild(mqplus);
    }
}
var script = document.createElement('script')
script[script.innerText ? 'innerText' : 'textContent'] = '(' + fn + ')()';
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
