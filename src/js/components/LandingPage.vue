<template>
	<div class="landing-page">
		<div class="banner">
			<div class="image"></div>
			<div class="text-container">
				<h1 class="banner-title">Home to unique ideas from the world’s smart minds.</h1>
				<h2 class="banner-text">Hear directly from the people who know it best. From tech to politics to creativity and more — whatever your interest, we’ve got you covered.</h2>
			</div>
			<ButtonLink class="button-primary">Get started</ButtonLink>
			<ButtonLink class="button-secondary">Learn more</ButtonLink>
		</div>

		<TileSection
			header="Popular on Medium"
			:tiles="this.categories.popular"
		/>
		<TileSection
			header="Audio"
			:tiles="this.categories.audio"
		/>
	</div>
</template>

<script>
	import TileSection from './TileSection.vue';
	import Tile from './Tile.vue';
	import ButtonLink from './ButtonLink.vue';

	export default {
		data() {
			return {
				categories: {
					popular: [
						{
							thumbnail: 'https://cdn-images-1.medium.com/max/800/1*Opv_Z-pjWD1-e_rL1udvRg.jpeg',
							title: 'Encyclopedia Dad',
							snippet: 'The first time I consult Dad I’m eight. My mom’s dating this guy. He worked with Dad, and I guess he’s a nice enough. But I don’t like it…',
							author: 'Ryan Riley',
							authorThumbnail: 'https://cdn-images-1.medium.com/fit/c/80/80/1*H-nzuPwGkPOz8Wnmm-bEkw.jpeg',
							date: 'June 14',
							readingTime: '24 min'
						},
						{
							thumbnail: 'https://cdn-images-1.medium.com/max/800/1*e63a9PzXZxPgdlzyVxnsnA.jpeg',
							title: 'The Best Way to Learn Development Skills (While Getting Paid in the Process)',
							snippet: 'How to harness the motivation to learn development skills without fatigue and with financial revenue.',
							author: 'Michael Mangialardi',
							authorThumbnail: 'https://cdn-images-1.medium.com/fit/c/80/80/0*EZGwWIn38z4q3X_8.jpg',
							date: 'June 19',
							readingTime: '10 min'
						},
						{
							thumbnail: 'https://cdn-images-1.medium.com/max/800/1*nBfLLuLQo8Pd7-iNnfWf5A.jpeg',
							title: 'Apple Culture after 10 years of iPhone',
							snippet: 'by Jean-Louis Gassée',
							author: 'Jean-Louis Gassée',
							authorThumbnail: 'https://cdn-images-1.medium.com/fit/c/80/80/0*nxumRHpz3fHXRqkN.jpg',
							date: 'June 18',
							readingTime: '7 min'
						},
						{
							thumbnail: 'https://cdn-images-1.medium.com/max/800/1*-0YKxCzUug93g06oeifRaQ.jpeg',
							title: '6 Things You Need to Recover From Every Day',
							snippet: 'Less than 1% of people are living according to the principles/science described herein. However, I’m confident that if you apply these…',
							author: 'Benjamin P. Hardy',
							authorThumbnail: 'https://cdn-images-1.medium.com/fit/c/80/80/1*Nii6Op1jsOaE4mBfeQpSdw.jpeg',
							date: 'June 19',
							readingTime: '14 min'
						}
					],
					audio: [
						{
							thumbnail: 'https://cdn-images-1.medium.com/max/800/sgradmap/1*p3W4co8SfIlHBh7xbYcSqw.png',
							title: 'Progressive Prepping 101: Online Resources',
							snippet: 'The guaranteed no-Confederate-flag, almost-entirely-Bible-free guide to online emergency preparedness resources for beginners',
							author: 'Sarah Avery',
							authorThumbnail: 'https://cdn-images-1.medium.com/fit/c/120/160/1*k4UtJsQUp9iR1EgXQnxp2w@2x.png',
							date: 'June 19',
							readingTime: '9 min'
						},
						{
							thumbnail: 'https://cdn-images-1.medium.com/max/800/sgradmap/1*xB949CGbIkIUdkF4qbKFpw.jpeg',
							title: 'Sperm, Poison, and Lily of the Valley',
							snippet: 'In 2003, a study published in the journal Science claimed that human sperm were able to literally smell the distinctive springlike…',
							author: 'Edith Zimmerman',
							authorThumbnail: 'https://cdn-images-1.medium.com/fit/c/120/160/1*Cx9u-meYj4vXKu0XpZhrxQ@2x.png',
							date: 'June 19',
							readingTime: '6 min'
						},
						{
							thumbnail: 'https://cdn-images-1.medium.com/max/800/1*IRebQ_UQ3_GgmL_DAWW7zQ.jpeg',
							title: 'Why we need a dating app that understand Nash\'s equilibrium',
							snippet: 'Nash’s equilibrium is a simple concept that helps economists predict how competing companies will set prices, how much to pay a much-in…',
							author: 'Abhishek Madhavan',
							authorThumbnail: 'https://cdn-images-1.medium.com/fit/c/80/80/0*Gadzxykosi6ebsjf.jpg',
							date: 'May 23',
							readingTime: '5 min'
						},
						{
							thumbnail: 'https://cdn-images-1.medium.com/max/800/sgradmap/1*W1JrAvCpgSppmsSfn-_YlA.jpeg',
							title: 'The New Politics of Cybersecurity',
							snippet: 'Rethinking Our Strategic Infrastructure: Part 3',
							author: 'James Poulos',
							authorThumbnail: 'https://cdn-images-1.medium.com/fit/c/80/80/1*U_guYmkpkdmY-PDEtFfNIA.jpeg',
							date: 'June 19',
							readingTime: '7 min'
						}
					]
				}
			};
		},
		components: {
			TileSection,
			Tile,
			ButtonLink
		}
	};
</script>

<style lang="scss" scoped>
	$grid-spacing: 20px;

	.landing-page {
		width: 1000px;
		margin: auto;
		padding-bottom: 100px;

		.banner {
			position: relative;
			width: 100%;
			height: 400px;
			margin: auto;
			padding: 30px;

			.image {
				z-index: -1;
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				background-image: url("https://cdn-images-1.medium.com/max/2000/1*VaIUbgV3e-aj_Pa73xzWVA.png");
				background-size: 100% auto;
				background-position: center bottom;
			}

			.text-container {
				width: 420px;
				margin-bottom: 70px;

				* {
					font-weight: 100;
				}
			}
		}

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
	}
</style>
