import createApp from './create-app';

export default (context) => {
	return new Promise((resolve, reject) => {
		const { app, router } = createApp();

		router.push(context.url);
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();

			if (matchedComponents.length === 0) {
				return reject({ code: 404 });
			}

			resolve(app);
		});
	});
};
