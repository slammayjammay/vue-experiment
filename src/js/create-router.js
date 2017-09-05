import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';

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