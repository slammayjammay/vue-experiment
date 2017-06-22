<template>
	<div class="header">
		<div class="container">
			<div class="header-title vertically-center-container">
				<h1 class="vertically-center">Medium</h1>
			</div>
			<ul class="header-links vertically-center-container">
				<li class="header-link vertically-center">
					<a class="gray-link" href="#">Write a story</a>
				</li>
				<li class="header-link header-link-sign-up vertically-center">
					<a class="gray-link" href="#">Sign in / Sign up</a>
				</li>
				<li class="header-link header-link-search vertically-center">
					<div class="search-icon"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	$max-width: 1000px;
	$height: 65px;
	$background-color: #fff;

	.header {
		width: 100%;
		background-color: $background-color;

		.container {
			max-width: $max-width;
			height: $height;
			margin: auto;
			border-bottom: 1px solid rgba(0, 0, 0, .05);

			.header-title {
				float: left;
				height: 100%;

				h1 {
					margin: 0;
					&:before {
						height: 100%;
					}
				}
			}

			.header-links {
				float: right;
				height: 100%;

				.header-link {
					padding: 10px;
					margin-right: 30px;
					color: rgba(0, 0, 0, 0.44);

					&:last-child {
						margin-right: 0;
					}

					&.header-link-sign-up {
						a {
							color: rgb(0, 171, 107);

							&:hover {
								color: rgb(28, 153, 99);
							}
						}
					}

					&.header-link-search {
						padding: 0;

						&:hover {
							cursor: pointer;

							.search-icon {
								opacity: 1;
							}
						}

						.search-icon {
							opacity: 0.5;
							transition: opacity 0.1s ease;
							width: 20px;
							height: 20px;
							background-image: url('../../../images/search-icon.png');
							background-size: cover;
							background-position: center;
						}
					}
				}
			}
		}
	}
</style>
