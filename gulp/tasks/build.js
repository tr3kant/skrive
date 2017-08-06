/*
1. DEPENDENCIES
*/

import { series } from 'gulp';
import { styles, stylint } from './styles';

/*
1. DEPENDENCIES
*/
const build = series(
  series(
    stylint,
    styles,
  )
);

export default build;
