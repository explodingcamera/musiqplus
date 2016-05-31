import * as features from './features';
import $ from 'jquery'; // eslint-disable-line
import { isUrl } from './utils';

let id = 0;
class Setting {
  constructor(options) {
    this.opts = {
      visibility: 'visible',
      id: id++,
      ...options,
    };
  }
}

export default () => {
  global.musiqplus.settingsList = [
    new Setting({
      name: 'AutoLike',
      description: 'Automatically like every Song!',
      type: 'switch',
      defaultVal: 'true',
      storageKey: 'autolike',
      func: features.autoLike,
    }),
    new Setting({
      name: 'AutoJoin',
      description: 'Automatically join the waitlist!',
      type: 'switch',
      defaultVal: 'false',
      storageKey: 'autojoin',
      data: {},
      func: features.autoJoin,
    }),
    new Setting({
      name: 'Change Theme',
      description: 'Change the looks of musiqpad!',
      type: 'select',
      defaultVal: '0',
      storageKey: 'theme',
      data: [{
        name: 'MusiqPlus',            // ID 0
        url: 'https://explodingcamera.xyz/mqplus.theme.css',
        id: 0,
      }, {
        name: 'Classic',              // ID 1
        url: 'https://explodingcamera.xyz/classic.theme.css',
        id: 1,
      }, {
        name: 'Plug',                 // ID 2
        url: 'https://explodingcamera.xyz/plug.theme.css',
        id: 2,
      }, {
        name: 'NCS Theme by bentenz5', // ID 3
        url: 'https://rawgit.com/bentenz5/NCS/master/NCSTheme.css',
        id: 3,
      },
      ],
      func: features.changeTheme,
    }),
    new Setting({
      name: 'Download current Song',
      description: 'Download the current song',
      type: 'playerbtn',
      defaultVal: true,
      storageKey: null,
      data: {},
      func: features.downloadSong,
    }),
    new Setting({
      name: 'Custom Background',
      description: 'Change the Background',
      type: 'textinput',
      defaultVal: '',
      storageKey: 'bg',
      data: {},
      func(key) {
        if (key !== '' && isUrl(key)) {
          $('#room-bg').css('cssText', `background-image: url('${key}') !important`);
        }
      },
    }),
    new Setting({
      name: '',
      description: '',
      type: '',
      defaultVal: '',
      storageKey: '',
      data: {},
      func(key) {

      },
    }),
  ];
};
