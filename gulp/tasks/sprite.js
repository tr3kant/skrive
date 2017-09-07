/*
1. DEPENDENCIES
*/

import { src, dest } from 'gulp';

import { plugins } from '../utils/taskHelpers';
import buffer from 'vinyl-buffer';
import { spritesmithConfig, imageminConfig, pathConfig } from '../config';
import { isDevelopment } from '../utils/env';

/*
2. TASKING
*/

const sprite = () => {
  let spriteData = src(
    [ '**/*.png', '!**/_*.png' ],
    { cwd: `${pathConfig.src}/images/sprite` }
  )
    .pipe( plugins.spritesmith( spritesmithConfig ) );

  spriteData.img.pipe( buffer() )
    .pipe( plugins.if( ! isDevelopment, plugins.imagemin( imageminConfig.images ) ) )
    .pipe( dest( 'build/assets/images' ) );

  spriteData.css.pipe( buffer() )
    .pipe( dest( `${pathConfig.src}/styles/components` ) );

  return spriteData.img.pipe( buffer() );
};

export default sprite;
