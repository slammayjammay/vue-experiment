<template>
	<div class="sticky-header" :class="headerClass">
		<div class="container">
			<div class="sticky-header-links-container">
				<ButtonLink class="sticky-header-link-get-started"
					backgroundColor="#00ab6b"
					borderColor="#00ab6b"
					color="#fff"
				>
					Get started
				</ButtonLink>

				<ul class="sticky-header-links vertically-center-container">
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Home</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Popular on Medium</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Audio</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Members only</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Handpicked by Medium staff</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Technology</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Creativity</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Entrepreneurship</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Culture</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Self</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Politics</a></li>
					<li class="sticky-header-link vertically-center"><a class="gray-link" href="#">Bookmarks</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import ButtonLink from './ButtonLink.vue';

	export default {
		props: ['scrollPosition'],
		computed: {
			headerClass() {
				return this.scrollPosition > 65 ? 'sticking' : 'stuck';
			}
		},
		components: {
			ButtonLink
		}
	};
</script>

<style lang="scss" scoped>
	$max-width: 1000px;
	$sticky-header-height: 50px;
	$background-color: #fff;

	.sticky-header {
		position: sticky;
		top: 0;
		height: $sticky-header-height;
		background-color: $background-color;
		z-index: 1;
		font-size: 14px;
		border-bottom: 1px solid rgba(0, 0, 0, .05);

		&.stuck {
			.sticky-header-link-get-started {
				display: none;
			}
		}

		.container {
			max-width: $max-width;
			margin: auto;
			height: 100%;
		}

		.sticky-header-links-container {
			height: 100%;
			overflow: hidden;
		}

		.sticky-header-links {
			height: 100%;
			white-space: nowrap;
			overflow-x: scroll;
			// below: these allow scrolling horizontally with no scroll bar (in
			// conjunction with .sticky-header-links-container)
			overflow-y: hidden;
			box-sizing: initial;
			padding-bottom: $sticky-header-height;

			.sticky-header-link {
				margin-right: 15px;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		.sticky-header-link-get-started {
			position: relative;
			top: 50%;
			transform: translateY(-50%);
			padding-left: 10px;
			float: right;
			background-color: $background-color;
		}
	}
</style>
