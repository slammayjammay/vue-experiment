<template>
	<div class="tile-section">
		<div class="tile-category tile-category-popular">
			<div class="tile-section-title vertically-center-container">
				<h2 class="vertically-center">{{ header }}</h2>
			</div>
			<div class="tile-section-more vertically-center-container">
				<a class="vertically-center gray-link" href="#">MORE ></a>
			</div>
		</div>

		<Tile
			v-for="(tile, idx) in tiles"
			key="idx"
			:thumbnail="tile.thumbnail"
			:title="tile.title"
			:snippet="tile.snippet"
			:author="tile.author"
			:authorThumbnail="tile.authorThumbnail"
			:date="tile.date"
			:readingTime="tile.readingTime"
			:class="{ left: idx % 2 === 0, right: idx % 2 === 1 }"
			>
		</Tile>
	</div>
</template>

<script>
	import Tile from './Tile.vue';

	export default {
		props: ['header', 'tiles'],
		components: {
			Tile
		}
	};
</script>

<style lang="scss" scoped>
	$grid-spacing: 20px;

	.tile-section {
		padding-top: 35px;

		&:after {
			display: block;
			clear: both;
			content: '';
		}

		.tile-category {
			height: 65px;
			border-bottom: 1px solid rgba(0, 0, 0, .15);
			&:after {
				display: block;
				clear: both;
				content: '';
			}
		}

		.tile-section-title {
			float: left;
			height: 100%;
			border-bottom: 1px solid rgba(0, 0, 0, .44);
			box-sizing: initial;

			h2 {
				margin: 0;
				font-size: 20px;
			}
		}

		.tile-section-more {
			float: right;
			height: 100%;
			font-size: 12px;
		}

		.tile {
			float: left;
			margin-top: $grid-spacing;

			&.left {
				padding-right: $grid-spacing / 2;
			}
			&.right {
				padding-left: $grid-spacing / 2;
			}
		}
	}
</style>
