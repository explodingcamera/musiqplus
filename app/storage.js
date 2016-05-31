import 'xdlocalstorage'; // eslint-disable-line

export class Storage {
  constructor(url) {
    xdLocalStorage.init( // eslint-disable-line
      {
        iframeUrl: url,
        initCallback() {
          this.init();
        },
      }
    );
  }
  init() {

  }

  sync() {

  }
}
