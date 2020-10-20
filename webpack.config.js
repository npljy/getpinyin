const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './'),
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'getPinYin'
    // // libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  
}