/**
 *
 * @file webpack.config.common.js
 * @author Jérémy Levron <jeremylevron@19h47.fr> (http://19h47.fr)
 */

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const path = require('path');

const resolve = require('./webpack.utils');

module.exports = {
	entry: {
		dist: resolve('src/RadioGroup.js'),
		docs: resolve('src/RadioGroup.js'),
	},
	output: {
		library: 'RadioGroup',
		libraryTarget: 'umd',
		filename: '../[name]/main.js',
		path: path.resolve(process.cwd(), 'dist'),
	},
	devServer: {
		contentBase: resolve('/'),
		compress: true,
		port: 3000,
		inline: true,
		disableHostCheck: true,
		writeToDisk: true,
	},
	resolve: {
		alias: {
			'@': resolve('src'),
			Utils: resolve('src/utils'),
		},
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [resolve('dist'), resolve('docs')],
		}),
		new HtmlWebpackPlugin({
			filename: resolve('docs/index.html'),
			template: resolve('index.html'),
			inject: false,
		}),
		new WebpackNotifierPlugin({
			title: 'Webpack',
			excludeWarnings: true,
			alwaysNotify: true,
		}),
	],
};
