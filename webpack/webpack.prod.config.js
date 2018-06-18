const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    path.join(__dirname, '../src/index.js')
	],
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
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new CleanWebPackPlugin(['dist'])
  ]
}
