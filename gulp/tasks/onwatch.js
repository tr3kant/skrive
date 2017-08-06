/*
1. DEPENDENCIES
*/
import { watch, series } from 'gulp';
import chalk from 'chalk';
import del from 'del';
import path from 'path';
import logger from 'gulplog';

import { pathConfig } from '../config';
import { styles, stylint } from './styles';

/*
2. TASKING
*/
function onWatchAdd( filePath ) {
  logger.info( `File ${chalk.underline.green( filePath )} has been added.` );
}

function onWatchChange( filePath ) {
  logger.info( `File ${chalk.underline.yellow( filePath )} was changed.` );
}

function onWatchRemove( filePath ) {
  const filePathFromSrc = path.relative( path.resolve( pathConfig.src ), filePath );
  const destFilePath = path.resolve( pathConfig.dist, filePathFromSrc );
  del.sync( destFilePath );

  logger.info( `File ${chalk.underline.red( filePath )} has been removed.` );
}

function onWatchError( error ) {
  logger.info( chalk.underline.red( 'Error happened', error ) );
}

function addEventsHandlers( watcher ) {
  return watcher
    .on( 'add', onWatchAdd )
    .on( 'change', onWatchChange )
    .on( 'unlink', onWatchRemove )
    .on( 'error', onWatchError );
}
const onwatch = done => {

  const watchers = [
    // Static styles
    watch(
      `${pathConfig.src}/styles/**/*.styl`,
      series( stylint, styles )
    ),

  ];

  watchers.map( watcher => addEventsHandlers( watcher ) );

  logger.info( chalk.green( 'Watching changes...' ) );
  done();

}

export default onwatch;
