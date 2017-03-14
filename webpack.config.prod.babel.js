import webpack from 'webpack'
import path from 'path'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

let extractStyles = new ExtractTextPlugin({
    filename:  (getPath) => {
      return getPath('[name].css').replace('js', 'css');
    },
    allChunks: true
  })
let extractHtml = new ExtractTextPlugin('[name].html')

let config = {
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
  },
  entry:  {
    'css/main': [
      path.resolve(__dirname, 'webpack/styles/app.scss')
    ],
    'js/bundle': [
      path.resolve(__dirname, 'webpack/entry.js')
    ]
  },
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    path: 'src/assets/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules\/*/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules\/*/,
        use: extractStyles.extract({
          use: [
            {
              loader: 'css-loader?importLoaders=1'
            },
            {
              loader: 'csso-loader?-restructure'
            },             
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                path.resolve(__dirname, 'node_modules/sanitize.css/'),
                path.resolve(__dirname, 'node_modules/bulma/')
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    extractStyles,
    extractHtml
  ]
}

export default config

