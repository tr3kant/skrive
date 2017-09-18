/*
1. DEPENDENCIES
*/

import { series, parallel } from 'gulp';
import { styles, stylint } from './styles';
import { markup } from './markup';
import { images } from './images';
import sprite from './sprite';
import icons from './icons';

/*
1. DEPENDENCIES
*/
const build = series(
  markup,
  series(
    stylint,
    styles,
  ),
  parallel(
    images,
    sprite,
    icons,
  ),
);

export default build;
