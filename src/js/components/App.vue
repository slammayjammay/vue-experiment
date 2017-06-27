<template>
	<div id="app" class="app">
		<header-component/>
		<sticky-header :scrollPosition="scrollPosition"/>
		<landing-page/>
	</div>
</template>

<script>
	import HeaderComponent from './HeaderComponent.vue';
	import LandingPage from './LandingPage.vue';
	import StickyHeader from './StickyHeader.vue';

	export default {
		data() {
			return {
				scrollPosition: null
			};
		},
		methods: {
			updateScrollPosition() {
				this.scrollPosition = window.scrollY;
			}
		},
		mounted() {
			window.addEventListener('scroll', () => this.updateScrollPosition());
		},
		components: {
			HeaderComponent,
			LandingPage,
			StickyHeader
		}
	}
</script>

<style lang="scss">
	@import '../../scss/helper-classes';

	html, body {
		font-family: sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	ul, li {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
</style>
