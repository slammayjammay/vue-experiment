<template>
	<div class="tile">
		<div class="thumbnail" v-bind:style="style.thumbnail"></div>

		<div class="content">
			<div class="content-container">
				<p class="title">{{ title }}</p>
				<p class="text">{{ snippet }}</p>
				<div class="author">
					<div class="author-thumbnail" v-bind:style="style.authorThumbnail"></div>
					<div class="more-info">
						<p class="name">{{ author }}</p>
						<p class="date">{{date }} • {{ readingTime }} read</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['thumbnail', 'title', 'snippet', 'author', 'authorThumbnail', 'date', 'readingTime'],
		computed: {
			style() {
				return {
					thumbnail: `background-image: url("${this.thumbnail}")`,
					authorThumbnail: `background-image: url("${this.authorThumbnail}")`
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tile {
		width: 50%;
		height: 260px;

		.thumbnail {
			width: 40%;
			height: 100%;;
			background-size: cover;
			background-position: center;
			float: left;
		}

		.content {
			width: 60%;
			float: left;
			height: 100%;
			padding: 20px;
			border: 1px solid lightgray;
			border-radius: 3px;
			border-left: none;

			.content-container {
				position: relative;
				height: 100%;

				.title {
					margin: 0;
					font-size: 20px;
				}
				.text {
					color: rgba(0, 0, 0, 0.44);
				}

				.author {
					font-size: 12px;
					position: absolute;
					bottom: 0;

					.author-thumbnail {
						float: left;
						width: 40px;
						height: 40px;
						border-radius: 50%;
						// background-image: url("https://cdn-images-1.medium.com/fit/c/80/80/0*nxumRHpz3fHXRqkN.jpg");
						background-size: cover;
						background-position: center;
					}

					.more-info {
						float: left;
						margin-left: 10px;
						margin-top: 3px;

						.name, .date {
							margin: 0;
						}

						.name {
							margin-bottom: 5px;
						}

						.date {
							color: rgba(0, 0, 0, 0.44);
						}
					}
				}
			}
		}
	}
</style>
