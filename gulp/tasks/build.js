/*
1. DEPENDENCIES
*/

import { series } from 'gulp';
import { styles, stylint } from './styles';
import { markup } from './markup';

/*
1. DEPENDENCIES
*/
const build = series(
  markup,
  series(
    stylint,
    styles,
  )
);

export default build;
