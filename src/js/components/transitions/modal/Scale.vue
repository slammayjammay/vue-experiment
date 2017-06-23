<template>
	<transition name="scale"
		v-on:beforeEnter="beforeEnter"
		v-on:enter="enter"
	>
		<slot></slot>
	</transition>
</template>

<script>
	import { TweenMax } from 'gsap';

	export default {
		props: {
			duration: { default: 200 },
			scaleFrom: { default: 0.5 }
		},
		methods: {
			beforeEnter(el) {
				const modalContent = this.$el.querySelector('.modal-content');
				TweenMax.set(modalContent, {
					opacity: 0,
					'transform-origin': 'bottom',
					scale: this.scaleFrom
				});
			},
			enter(el, onComplete) {
				const modalContent = this.$el.querySelector('.modal-content');

				TweenMax.fromTo(modalContent, this.duration / 1000, {
					scale: this.scaleFrom
				}, {
					scale: 1,
					opacity: 1,
					onComplete
				});
			}
		}
	};
</script>
