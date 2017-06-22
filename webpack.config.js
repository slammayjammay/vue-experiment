module.exports = {
	entry: './src/js/index.js',
	output: {
		path: `${__dirname}/dist`,
		publicPath: '/dist/',
		filename: 'built.js'
	},
	module: {
		loaders: [
			{ loader: 'vue-loader', test: /\.vue$/ },
			{ loader: 'url-loader', test: /\.(png|jpg)$/ }
		]
	}
};
