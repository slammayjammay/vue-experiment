const webpack = require('webpack');
const merge = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
	entry: './src/js/entry-client.js',
	output: {
		filename: '[name].js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		}),
		new VueSSRClientPlugin()
	]
});
