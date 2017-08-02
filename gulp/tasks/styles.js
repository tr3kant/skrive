/*
1. DEPENDENCIES
*/

import { src, dest } from 'gulp';

import { pathConfig, plumberConfig, stylusConfig } from '../config';
import bs from '../utils/getBrowserSyncInstance';
import { isDevelopment } from '../utils/env';
import { plugins } from '../utils/taskHelpers';

/*
1. TASKING
*/

export function processStyles() {
  return src( `${pathConfig.src}/styles/skrive.styl` )
    .pipe( plugins.plumber( plumberConfig ) )
    .pipe( plugins.sourcemaps.init() )
    .pipe( plugins.stylus( stylusConfig ) )
    .pipe( isDevelopment ? plugins.sourcemaps.write() : plugins.util.noop() )
    .pipe( dest( `${pathConfig.dist}/styles` ) )
    .pipe( bs.reload( { stream: true } ) );
}
