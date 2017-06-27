const merge = require('webpack-merge');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const baseConfig = require('./webpack.base.config');
const packageJSON = require('../package.json');

module.exports = merge(baseConfig, {
	target: 'node',
	entry: './src/js/entry-server.js',
	output: {
		filename: 'server-bundle.js',
		libraryTarget: 'commonjs2'
	},
	externals: Object.keys(packageJSON.dependencies),
	plugins: [
		new VueSSRServerPlugin()
	]
});
