/*
2. EXPORTS
*/

const $ = require( 'gulp-load-plugins' )( { pattern: [ '*', '!gulp-*', '!postcss-*', '!imagemin-*' ] } );
const plugins = require( 'gulp-load-plugins' )();
const imagemin = require( 'gulp-load-plugins' )( {
  pattern:       [ 'imagemin-*' ],
  replaceString: /^imagemin(-|\.)/,
} );
const posthtml = require( 'gulp-load-plugins' )( {
  pattern:       [ 'posthtml-*' ],
  replaceString: /^posthtml(-|\.)/,
} );

export {
  $,
  plugins,
  imagemin,
  posthtml,
};
