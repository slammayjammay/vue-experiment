import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import ArticlePage from './components/ArticlePage.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: LandingPage },
    { path: '/article/:title', component: ArticlePage }
];

export default () => {
    return new VueRouter({ 
        mode: 'history',
        routes
    });
};