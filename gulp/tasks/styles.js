/*
1. DEPENDENCIES
*/

import { src, dest } from 'gulp';

import { pathConfig, plumberConfig, stylusConfig } from '../config';
import bs from '../utils/getBrowserSyncInstance';
import { isDevelopment } from '../utils/env';
import { plugins } from '../utils/taskHelpers';

/*
2. TASKING
*/

export const styles = () =>
  src( `${pathConfig.src}/styles/skrive.styl` )
    .pipe( plugins.plumber( plumberConfig ) )
    .pipe( plugins.sourcemaps.init() )
    .pipe( plugins.stylus( stylusConfig ) )
    .pipe( plugins.postcss() )
    .pipe( isDevelopment ? plugins.sourcemaps.write() : plugins.util.noop() )
    .pipe( dest( `${pathConfig.dist}/styles` ) )
    .pipe( bs.reload( { stream: true } ) );

export const stylint = () =>
  src( `${pathConfig.src}/styles/**/*.styl` )
    .pipe( plugins.plumber( plumberConfig ) )
    .pipe( plugins.stylint( {
      reporter: {
        reporter:        'stylint-stylish',
        reporterOptions: { verbose: true },
      },
    } ) )
    .pipe( plugins.stylint.reporter() )
    .pipe( plugins.stylint.reporter( 'fail', { failOnWarning: true } ) );
