const fs = require('fs');
const { join } = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const renderer = createBundleRenderer(join(__dirname, './dist/vue-ssr-server-bundle.json'), {
	template: fs.readFileSync('./src/index.template.html', 'utf-8'),
	clientManifest: require(join(__dirname, './dist/vue-ssr-client-manifest.json'))
});

const server = express();

const PORT = 8080;
server.listen(PORT, () => {
	console.log(`Serving on port ${PORT}`);
});

server.get('/', (req, res) => {
	renderer.renderToString((err, html) => {
		if (err) {
			console.log(err);
			throw err;
		}

		res.send(html);
	});
});

// serve all files under dist/
server.use('/dist', express.static(`${__dirname}/dist/`));
