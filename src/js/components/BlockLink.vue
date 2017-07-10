<template>
	<a class="block-link" :href="href">
		<slot></slot>
	</a>
</template>

<script>
	export default {
		props: ['href']
	};
</script>

<style lang="scss" scoped>
	.block-link {
		display: block;
		color: inherit;
		text-decoration: none;
	}
</style>
