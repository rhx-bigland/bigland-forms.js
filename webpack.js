var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var webpack = require('webpack');

var watch = !!((process.env || {}).watch);
var prod = !!((process.env || {}).prod || (process.env || {}).production);

var selectize = watch || !!((process.env || {}).selectize);

console.log(JSON.stringify({

  selectize,
  watch,
  prod

}, null, 2));

var common_plugins = [
  new CopyWebpackPlugin([
    { from: path.join(__dirname, 'src', 'assets') },
    { from: path.join(__dirname, 'node_modules', 'jquery'), to: 'jquery' },
    { from: path.join(__dirname, 'node_modules', 'selectize'), to: 'selectize' },
  ]),

  new HtmlWebpackPlugin({
    title: 'BiglandForms',
    template: 'index.ejs',
    filename: 'index.html',
    hash: true
  }),

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
    'process.env.SELECTIZE': JSON.stringify(selectize ? true : false)
  }),

  new webpack.optimize.DedupePlugin()
];

var production_plugins = prod ? [

  new webpack.optimize.UglifyJsPlugin({
    compress: true,
    mangle: false
  })
] : [];

var plugins = common_plugins.concat(production_plugins);

var sufix = ([]
  .concat(selectize ? ['selectize'] : [])
  .concat(prod ? ['min'] : ['src'])
).join('.');

var config = {

  entry: path.join(__dirname, 'index.js'),

  output: {
    filename: `bigland-forms.${sufix}.js`,
    library: 'BiglandForms',
    libraryTarget: 'var',
    path: path.join(__dirname, 'dist')
  },

  resolve: {
    alias: {
      'src': path.join(__dirname, 'src'),
    },
    extensions: ['', '.js', '.json'],
    modulesDirectories: ["node_modules"]
  },

  module: {
    preLoaders: [
      { test: /\.js$/,
        loader: "eslint-loader",
        include: path.join(__dirname, 'src') }
    ],

    loaders: [
      { test: /\.js?$/,
        loaders: ['babel?cacheDirectory']
      },
      { test: /\.json$/,
        loaders: ['json']
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },

  plugins: plugins,
  target: 'web',
  watch: !!watch
};

if (watch) {

  var compiler = webpack(config);

  var server = new WebpackDevServer(compiler, {

    compress: true,
    contentBase: "dist",
    publicPath: "/",
    stats: 'minimal'
  });

  server.listen(4211, "localhost", function() {

    console.log('Listening on http://localhost:4211/');
  });

} else {

  webpack(config, function(err, stats) {
    err
    ? console.error(err)
    : console.log(stats.toString("minimal"));
  });
}
