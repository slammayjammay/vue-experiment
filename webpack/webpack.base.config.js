const { join } = require('path');

module.exports = {
	output: {
		path: join(__dirname, '../dist'),
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{ loader: 'vue-loader', test: /\.vue$/ },
			{ loader: 'url-loader', test: /\.(png|jpg)$/ }
		]
	},
	resolve: {
		extensions: ['*', '.js', '.vue']
	}
};
