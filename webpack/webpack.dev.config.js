const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    host: 'localhost',
    port: 3000,
    open: true
  },
  entry: {
    main: path.join(__dirname, '../src/index.js')
	},
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
		rules: [{
			  test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }]
      }
		]
	},
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new CleanWebPackPlugin(['dist'])
  ]
}
