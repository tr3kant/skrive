/*
1. DEPENDENCIES
*/

import browserSync from '../utils/getBrowserSyncInstance';
import { browserSyncConfig } from '../config';

/*
2. TASKING
*/

export const server = () =>
  browserSync.init( browserSyncConfig );

export const reload = calback => {
  browserSync.reload();
  calback();
};
