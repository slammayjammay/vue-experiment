import createApp from './app';

export default (context) => {
	return new Promise(resolve => {
		const app = createApp();
		resolve(app);
	});
};
