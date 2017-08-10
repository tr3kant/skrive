/*
1. DEPENDENCIES
*/

import { src, dest } from 'gulp';

import { pathConfig, plumberConfig, pugConfig } from '../config';
import { plugins } from '../utils/taskHelpers';

/*
2. TASKING
*/

export const markup = () =>
  src( `${pathConfig.src}/markup/*.pug` )
    .pipe( plugins.plumber( plumberConfig ) )
    .pipe( plugins.pug( pugConfig ) )
    .pipe( plugins.posthtml() )
    .pipe( plugins.rename( { extname: '.html' } ) )
    .pipe( dest( `${pathConfig.dist}` ) );
