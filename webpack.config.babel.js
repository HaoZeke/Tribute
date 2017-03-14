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
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules\/*/,
      },
      {
        test: /\.scss$/,
        use: extractStyles.extract({
          use: [
            {
              loader: 'css-loader?importLoaders=1'
            },            
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                path.resolve(__dirname, 'node_modules/sanitize.css/')
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    extractStyles,
    extractHtml
  ]
}

export default config
