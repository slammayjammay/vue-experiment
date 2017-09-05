//===========================================
// Universal entry point for sever and client
//===========================================
import Vue from 'vue';
import createRouter from './create-router';
import App from './components/App';

export default () => {
	const router = createRouter();
	const app = new Vue({
		router,
		render: h => h(App)
	});

	return { app, router };
};
