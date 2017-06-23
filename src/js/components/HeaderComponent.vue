<template>
	<div class="header" :class="headerClass">
		<Modal :thing="isSigningUp" v-on:close="toggleSignUp"></Modal>

		<div class="container" ref="container">
			<div class="header-title vertically-center-container">
				<h1 class="vertically-center">Medium</h1>
			</div>
			<ul class="header-links vertically-center-container">
				<li class="header-link vertically-center">
					<a class="gray-link" href="#">Write a story</a>
				</li>
				<li class="header-link header-link-sign-up vertically-center"
					v-on:click="toggleSignUp"
				>
					<span class="sign-up-link gray-link">Sign in / Sign up</span>
				</li>
				<li class="header-link header-link-search vertically-center-container vertically-center"
					ref="searchLink"
				>
					<div class="search-icon vertically-center" v-on:click="onSearchClick"></div>
					<input class="search-input vertically-center"
						ref="input"
						type="text"
						placeholder="Search Medium"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Modal from './Modal.vue';

	export default {
		components: {
			Modal
		},
		data() {
			return {
				isSearching: false,
				isSearchingVisible: false,
				isSigningUp: false
			};
		},
		computed: {
			headerClass() {
				return {
					'is-searching': this.isSearching,
					'is-searching-visible': this.isSearchingVisible,
					'is-signing-up': this.isSigningUp
				};
			}
		},
		methods: {
			thing() {
				console.log('here');
			},
			toggleSearch() {
				this.isSearching = !this.isSearching;
			},
			toggleSearchVisibility() {
				this.isSearchingVisible = !this.isSearchingVisible;
			},
			onSearchClick() {
				if (!this.isSearchingVisible) {
					this.toggleSearch();
					this.toggleSearchVisibility();
				}
			},
			onSearchTransitionEnd(e) {
				if (e.propertyName !== 'transform') {
					return;
				}

				if (this.isSearching) {
					this.$refs.input.focus();
				} else {
					this.toggleSearchVisibility();
				}
			},
			toggleSignUp() {
				this.isSigningUp = !this.isSigningUp;
			}
		},
		mounted() {
			this.$refs.input.addEventListener('blur', this.toggleSearch);
			this.$refs.container.addEventListener('transitionend', this.onSearchTransitionEnd);
		},
		destroyed() {
			this.$refs.input.removeEventListener('blur', this.toggleSearch);
			this.$refs.container.removeEventListener('transitionend', this.onSearchTransitionEnd);
		}
	};
</script>

<style lang="scss" scoped>
	$max-width: 1000px;
	$height: 65px;
	$background-color: #fff;
	$search-input-width: 200px;

	.header {
		width: 100%;
		background-color: $background-color;

		.container {
			max-width: $max-width;
			height: $height;
			margin: auto;
			position: relative;
			overflow: hidden;
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
				will-change: transform;
				transition: 260ms ease;
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
						&:hover {
							cursor: pointer;
						}

						.sign-up-link {
							color: rgb(0, 171, 107);

							&:hover {
								color: rgb(28, 153, 99);
							}
						}
					}

					&.header-link-search {
						padding: 0;
						margin-right: 0;

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
							margin-right: 5px;
						}

						.search-input {
							position: absolute;
							top: 0;
							bottom: 0;
							margin: auto;
							height: 30px;
							border: none;
							font-size: 14px;
							width: $search-input-width;

							&:focus {
								outline: none;
							}
						}
					}
				}
			}
		}

		&.is-searching {
			.header-links {
				transform: translateX(-$search-input-width);
			}
		}
	}
</style>
