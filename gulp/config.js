import path from 'path';

const CWD = process.cwd();

export const pathConfig = {
  src:  './source',
  dist: './build',
}

export const extensions = {
  styles:  'stylus',
  scripts: 'js',
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

// https://github.com/jescalan/accord/blob/master/docs/stylus.md
export const stylusConfig = {
  use: [
    require( 'rupture' )(),
  ],
  include: [
    path.join( CWD, 'node_modules' ),
  ],
  'include css': true,
};

export const pugConfig = {
  pretty:  '\t',
  filters: {
    php: block => {
      return '<?' + block + '?>'
    },
  },
};

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
