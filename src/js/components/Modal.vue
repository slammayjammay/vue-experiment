<template>
	<ScaleTransition>
		<div class="modal" v-show="thing">
			<div class="backdrop" v-on:click="close">
				<div class="modal-content"></div>
			</div>
			<div class="close" v-on:click="close">×</div>
		</div>
	</ScaleTransition>
</template>

<script>
	import ScaleTransition from './transitions/modal/Scale.vue';

	export default {
		props: ['thing'],
		components: {
			ScaleTransition
		},
		methods: {
			close() {
				this.$emit('close');
			}
		}
	};
</script>
