const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

module.exports = {
    entry: ['./source/client.js'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../build/statics'),
    },
    module:{
        preLoaders:[
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2016', 'es2017', 'react'],
                    plugins: ['transform-es2015-modules-commonjs']
                }
            },
            {
                test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
		        	fallback: 'style-loader',
		          	use: 'css-loader?modules'
		        }),
            }
        ]
    },
    target: 'web',
    plugins: [
    new ExtractTextPlugin('../statics/styles.css'),
  ],
}