import path from 'path';
import { plugins } from './utils/taskHelpers';

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

export const svgSymbolsConfig =  {
  log:  'info',
  svg:  { xmlDeclaration: false },
  mode: {
    symbol: {
      dest:   './',
      sprite: `${pathConfig.dist}/assets/images/icons.svg`,
      bust:   false,
      render: {
        styl: {
          dest:     `${pathConfig.src}/styles/components/components.iconsprite.styl`,
          template: `${pathConfig.src}/styles/templates/templates.svg.handlebars`,
        },
      },
    },
  },
  shape: {
    transform: [
      {
        svgo: {
          plugins: [
            // This plugin converts all colors to currentColor.
            // Read more about this here: https://css-tricks.com/cascading-svg-fill-color/
            //
            // Should not be used when you rely on the colors of your icons
            { convertColors: { currentColor: true }},
            // Optimize and minimize SVG shape
            { collapseGroups: true },
            { convertShapeToPath: true },
            { mergePaths: true },
            { transformsWithOnePath: true },
            { convertPathData: true },
            { convertTransform: true },
            { convertStyleToAttrs: true },
            // Remove noise from designer tools and clean up
            { cleanupAttrs: true },
            { removeDoctype: true },
            { removeXMLProcInst: true },
            { removeComments: true },
            { removeMetadata: true },
            { removeTitle: true },
            { removeDesc: true },
            { removeUselessStrokeAndFill: true },
            { removeUnusedNS: true },
            { removeRasterImages: true },
            { removeUnknownsAndDefaults: true },
            { removeNonInheritableGroupAttrs: true },
            { cleanupListOfValues: true },
            { cleanupNumericValues: true },
          ],
        },
      },
    ],
  },
};

export const spritesmithConfig = {
  retinaSrcFilter: '**/*@2x.png',
  imgName:         'sprite.png',
  imgPath:         '../images/sprite.png',
  retinaImgName:   'sprite@2x.png',
  retinaImgPath:   '..images/sprite@2x.png',
  cssName:         'components.pngsprite.styl',
  algorithm:       'binary-tree',
  padding:         8,
  cssTemplate:     path.join( CWD, 'source/styles/templates/templates.png.handlebars' ),
};

export const imageminConfig = {
  images: [
    plugins.imagemin.gifsicle( {
      interlaced:        true,
      optimizationLevel: 3,
    } ),
    require( 'imagemin-jpeg-recompress' )( {
      progressive: true,
      max:         80,
      min:         70,
    } ),
    require( 'imagemin-pngquant' )( { quality: '75-85' } ),
    plugins.imagemin.svgo( {
      plugins: [
        { removeViewBox: false },
      ],
    } ),
  ],

  icons: [
    plugins.imagemin.svgo( {
      plugins: [
        { removeTitle: true },
        { removeStyleElement: true },
        { removeAttrs: { attrs: [ 'id', 'class', 'data-name', 'fill', 'fill-rule' ] }},
        { removeEmptyContainers: true },
        { sortAttrs: true },
        { removeUselessDefs: true },
        { removeEmptyText: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeHiddenElems: true },
        { transformsWithOnePath: true },
      ],
    } ),
  ],
};

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
