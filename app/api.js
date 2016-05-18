import Promise from 'bluebird';
import _API from 'api';
import { mergeDeep } from './utils';

const extendedAPI = {

};

export const API = mergeDeep(Promise.promisifyAll(_API), extendedAPI);
