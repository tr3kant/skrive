/*
1. DEPENDENCIES
*/

import { series, parallel } from 'gulp';
import { server } from './server';
import build from './build';
import onwatch from './onwatch';

/*
2. TASKING
*/

const dev = series(
  build,
  parallel(
    server,
    onwatch
  )
);

export default dev;
