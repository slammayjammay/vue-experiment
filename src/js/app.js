//===========================================
// Universal entry point for sever and client
//===========================================
import Vue from 'vue';
import App from './components/App.vue';

export default () => {
	return new Vue({
		render: h => h(App)
	});
};
