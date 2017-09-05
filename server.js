const fs = require('fs');
const { join } = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const setupDevServer = require('./webpack/setup-dev-server');

const isProduction = process.env.NODE_ENV === 'production';
const server = express();

// serve all files under dist/
server.use('/dist', express.static(`${__dirname}/dist/`));

let renderer;

if (isProduction) {
  const bundle = require('./dist/vue-ssr-server-bundle.json');
  const clientManifest = require('./dist/vue-ssr-client-manifest.json');
  renderer = createRenderer(bundle, { clientManifest });
} else {
	// do the watching and hot reloading
	setupDevServer(server, {
		onBundled(bundle, options) {
			renderer = createRenderer(bundle, options);
		}
	});
}

const PORT = 8080;
server.listen(PORT, () => {
	console.log(`Serving on port ${PORT}`);
});

server.get('*', (req, res) => {
	if (!renderer && !isProduction) {
		return res.end('waiting for compilation...refresh in a moment.');
	}

	const context = {
		url: req.url
	};
	renderer.renderToString(context, (err, html) => {
		if (err) {
			console.log(err);
			throw err;
		}

		res.send(html);
	});
});

function createRenderer(bundlePath, options = {}) {
	return createBundleRenderer(bundlePath, Object.assign({
		template: fs.readFileSync('./src/index.template.html', 'utf-8')
	}, options));
}
