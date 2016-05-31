import Promise from 'bluebird';
import $ from 'jquery';
import API from './api';
import pkg from './../package.json';
import storage from './storage';

if (!global.musiqplus) {
  const musiqplus = global.musiqplus = {
    init() {
    },
    ...pkg,
  };
  musiqplus.init();
}
