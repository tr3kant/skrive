/*
1. DEPENDENCIES
*/

import { src, dest } from 'gulp';

import { plumberConfig, imageminConfig, pathConfig } from '../config';
import { plugins } from '../utils/taskHelpers';
import { isDevelopment } from '../utils/env';

/*
2. TASKING
*/

export const images = () =>
  src( [ '**/*.*', '!**/_*.*', '!sprite/*.*', '!icons/*.*' ], { cwd: `${pathConfig.src}/images` } )
    .pipe( plugins.plumber( plumberConfig ) )
    .pipe( plugins.changed( `${pathConfig.dist}/assets/images` ) )

    // Minify images
    .pipe(
      plugins.if(
        ! isDevelopment,
        plugins.imagemin( imageminConfig.images )
      )
    )
    .pipe( dest( `${pathConfig.dist}/assets/images` ) );
