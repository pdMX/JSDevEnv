import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS. - can remove <script> src="bundle.js"</script> from html. webpack will add in dynamically and script tags for us
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin()

  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
};
