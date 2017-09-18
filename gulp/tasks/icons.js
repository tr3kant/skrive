/*
1. DEPENDENCIES
*/

import { src, dest } from 'gulp';
import { plugins } from '../utils/taskHelpers';
import { isDevelopment } from '../utils/env';
import {
	plumberConfig,
	imageminConfig,
	svgSymbolsConfig,
  pathConfig,
} from '../config';

/*
2. TASKING
*/

const icons = () =>
	src( [ '**/*.svg', '!**/_*.svg' ], { cwd: `${ pathConfig.src }/images/icons` } )
    .pipe( plugins.plumber( plumberConfig ) )
		.pipe( plugins.if( ! isDevelopment, plugins.imagemin( imageminConfig.icons ) ) )
		.pipe( plugins.svgSprite( svgSymbolsConfig ) )
    .pipe( dest( './' ) );

export default icons;
