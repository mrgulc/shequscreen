const resolvePath = require('./resolvePath')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: process.env.NODE_EVN === 'production' ? './' : '/',
    hotOnly: true,
    historyApiFallback: true,
    port: 6061,
    contentBase: 'src/public'
  }
}
