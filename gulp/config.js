import path from 'path';

const CWD = process.cwd();

export const pathConfig = {
  src:  './source',
  dist: './build',
}

export const delConfig = [
  'dest',
  'tmp',
];

export const plumberConfig = { errorHandler: require( './utils/errorHandler.js' ) };

export const browserSyncConfig = {
  server:          './build',
  notify:          false,
  reloadOnRestart: true,
  snippetOptions:  { rule: { match: /<\/body>/i }},
};

const processors = [
  require( 'rucksack-css' )( {
    clearFix:                true,
    shorthandPosition:       true,
    inputPseudo:             true,
    rangeElements:           true,
    alias:                   false,
    fallbacks:               false,
    responsiveType:          true,
    fontPath:                false,
    autoprefixer:            false,
    quantityPseudoSelectors: true,
  } ),
  require( 'postcss-cssnext' )( {
    messages: {
      browser: false,
      console: false,
    },
    features: {
      customProperties:  false,
      customMedia:       true,
      mediaQueriesRange: false,
      customSelectors:   true,
      colorFunction:     true,
    },
    autoprefixer: false,
  } ),
  require( 'postcss-pxtorem' )( {
    rootValue:     16,
    unitPrecision: 5,
    propWhiteList: [ 'font', 'font-size', 'letter-spacing', 'line-height', 'margin-top', 'margin-bottom', 'margin', 'padding' ],
    mediaQuery:    true,
  } ),
];

// https://github.com/jescalan/accord/blob/master/docs/stylus.md
export const stylusConfig = {
  use: [
    require( 'poststylus' )( processors ),
    require( 'rupture' )(),
  ],
  include: [
    path.join( CWD, 'node_modules' ),
  ],
  'include css': true,
};

export const pugConfig = { pretty: '\t' };

export const htmlPrettifyConfig = {
  'unformatted':       [ 'pre', 'code', 'textarea' ],
  'indent_with_tabs':  true,
  'preserve_newlines': true,
  'brace_style':       'expand',
  'end_with_newline':  true,
};

// export const svgSymbolsConfig =  {
//   title: false,
//   id: '%f',
//   className: '%f',
//   svgClassname: 'icons-sprite',
//   templates: [
//     path.join(CWD, 'source/static/styles/templates/icons-template.styl'),
//     path.join(CWD, 'source/static/styles/templates/icons-template.svg')
//   ]
// };

// export const spritesmithConfig = {
//   retinaSrcFilter: '**/*@2x.png',
//   imgName: 'sprite.png',
//   retinaImgName: 'sprite@2x.png',
//   cssName: 'sprite.styl',
//   algorithm: 'binary-tree',
//   padding: 8,
//   cssTemplate: path.join(CWD, 'source/static/styles/templates/sprite-template.mustache')
// };

// export const imageminConfig = {
//   images: [
//     plugins.imagemin.gifsicle({
//       interlaced: true,
//       optimizationLevel: 3
//     }),
//     require('imagemin-jpeg-recompress')({
//       progressive: true,
//       max: 80,
//       min: 70
//     }),
//     require('imagemin-pngquant')({ quality: '75-85' }),
//     plugins.imagemin.svgo({
//       plugins: [
//         { removeViewBox: false }
//       ]
//     })
//   ],

//   icons: [
//     imagemin.svgo({
//       plugins: [
//         { removeTitle: true },
//         { removeStyleElement: true },
//         { removeAttrs: { attrs: [ 'id', 'class', 'data-name', 'fill', 'fill-rule' ] } },
//         { removeEmptyContainers: true },
//         { sortAttrs: true },
//         { removeUselessDefs: true },
//         { removeEmptyText: true },
//         { removeEditorsNSData: true },
//         { removeEmptyAttrs: true },
//         { removeHiddenElems: true },
//         { transformsWithOnePath: true }
//       ]
//     })
//   ]
// };

export const posthtmlConfig = {
  plugins: [
    require( 'posthtml-attrs-sorter' )( {
      order: [
        'class',
        'id',
        'name',
        'data',
        'ng',
        'src',
        'for',
        'type',
        'href',
        'values',
        'title',
        'alt',
        'role',
        'aria',
      ],
    } ),
  ],
  options: {},
};

export const ghPagesConfig = { branch: 'gh-pages' };
