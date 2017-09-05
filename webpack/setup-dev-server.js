const { join } = require('path');
const MFS = require('memory-fs');
const webpack = require('webpack');
const serverConfig = require('./webpack.server.config');
const clientConfig = require('./webpack.client.config');

module.exports = (server, options = {}) => {
	options.onBundled = options.onBundled || function() {};

	let bundle, clientManifest;

	// modify client config to work with hot middleware
	clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app];
	clientConfig.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	);

	// dev middleware
	const clientCompiler = webpack(clientConfig);
	const devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
		publicPath: clientConfig.output.publicPath, // required
		stats: { colors: true }
	});
	server.use(devMiddleware);

	// update client manifest
	clientCompiler.plugin('done', () => {
		clientManifest = (() => {
			const path = join(clientConfig.output.path, 'vue-ssr-client-manifest.json');
			try {
				return JSON.parse(devMiddleware.fileSystem.readFileSync(path));
			} catch(e) {}
		})();

		if (bundle) {
			options.onBundled(bundle, { clientManifest });
		}
	});

	// hot middleware
	server.use(require('webpack-hot-middleware')(clientCompiler));

	// watch and update server renderer
	const serverCompiler = webpack(serverConfig);
	const mfs = new MFS();
	const outputPath = join(clientConfig.output.path, 'vue-ssr-server-bundle.json');
	serverCompiler.outputFileSystem = mfs;

	serverCompiler.watch({}, (err, data) => {
		if (err) {
			throw err;
		}

		data = data.toJson();
		data.errors.forEach(err => console.error(err));
		data.warnings.forEach(err => console.warn(err));

		bundle = JSON.parse(mfs.readFileSync(outputPath, 'utf-8'));

		if (clientManifest) {
			options.onBundled(bundle, { clientManifest });
		}
	});
};
