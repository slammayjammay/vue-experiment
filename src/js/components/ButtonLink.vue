<template>
	<a href="#" class="button">
		<div class="button-link" :style="style">
			<slot></slot>
		</div>
	</a>
</template>

<script>
	export default {
		props: ['backgroundColor', 'borderColor', 'color'],
		computed: {
			style() {
				return {
					backgroundColor: this.backgroundColor,
					borderColor: this.borderColor,
					color: this.color
				};
			}
		}
	};
</script>

<style lang="scss" scoped>
	.button {
		.button-link {
			display: inline-block;
			padding: 9px 14px;
			border: 1px solid black;
			border-radius: 100000px;
			color: black;
			transition: .1s background-color, .1s border-color, .1s color, .1s fill;
		}

		&-primary {
			.button-link {
				background: black;
				color: white;
				&:hover {
					background: #727171;
					border-color: #727171;
				}
			}
		}

		&-secondary {
			.button-link {
				&:hover {
					border-color: #727171;
				}
			}
		}
	}

</style>
