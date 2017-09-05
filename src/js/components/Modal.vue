<template>
	<component v-bind:is="transition">
		<div class="modal" v-show="show">
			<div class="backdrop" v-on:click="close"></div>
			<div class="close" v-on:click="close">×</div>
			<div class="modal-content">
				<slot></slot>
			</div>
		</div>
	</component>
</template>

<script>
	import DefaultTransition from './transitions/modal/DefaultTransition';
	import ScaleTransition from './transitions/modal/ScaleTransition';

	export default {
		props: {
			show: { default: false },
			transition: { default: 'DefaultTransition' }
		},
		components: {
			DefaultTransition,
			ScaleTransition
		},
		methods: {
			close() {
				this.$emit('close');
			}
		}
	};
</script>
