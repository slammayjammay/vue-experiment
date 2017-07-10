<template>
	<modal class="sign-up-modal"
		:show="show"
		transition="scale-transition"
		v-on:close="close"
	>
		<div class="header">
			<h2>Medium</h2>
		</div>
		<div class="content">
			<p>Sign in to Medium to connect with voices and perspectives that matter.</p>
			<div class="continue-with twitter">
				<a class="vertically-center-container" href="#">
					<span class="continue-with-icon vertically-center">
						<svg width="25" height="25" viewBox="0 0 25 25"><path d="M21.725 5.338c-.744.47-1.605.804-2.513 1.006a3.978 3.978 0 0 0-2.942-1.293c-2.22 0-4.02 1.81-4.02 4.02 0 .32.034.63.07.94-3.31-.18-6.27-1.78-8.255-4.23a4.544 4.544 0 0 0-.574 2.01c.04 1.43.74 2.66 1.8 3.38-.63-.01-1.25-.19-1.79-.5v.08c0 1.93 1.38 3.56 3.23 3.95-.34.07-.7.12-1.07.14-.25-.02-.5-.04-.72-.07.49 1.58 1.97 2.74 3.74 2.8a8.49 8.49 0 0 1-5.02 1.72c-.3-.03-.62-.04-.93-.07A11.447 11.447 0 0 0 8.88 21c7.386 0 11.43-6.13 11.414-11.414.015-.21.01-.38 0-.578a7.604 7.604 0 0 0 2.01-2.08 7.27 7.27 0 0 1-2.297.645 3.856 3.856 0 0 0 1.72-2.23"></path></svg>
					</span>
					<p class="continue-with-text vertically-center">
						Continue with Twitter<br/>
						<small>We won't post without asking</small>
					</p>
				</a>
			</div>
			<div class="continue-with facebook">
				<a class="vertically-center-container" href="#">
					<span class="continue-with-icon vertically-center">
						<svg width="25" height="25" viewBox="0 0 25 25"><path d="M21 12.646C21 7.65 16.97 3.6 12 3.6s-9 4.05-9 9.046a9.026 9.026 0 0 0 7.59 8.924v-6.376H8.395V12.64h2.193v-1.88c0-2.186 1.328-3.375 3.267-3.375.93 0 1.728.07 1.96.1V9.77H14.47c-1.055 0-1.26.503-1.26 1.242v1.63h2.517l-.33 2.554H13.21V21.6c4.398-.597 7.79-4.373 7.79-8.954"></path></svg>
					</span>
					<p class="continue-with-text vertically-center">
						Continue with Facebook<br/>
						<small>We won't post without asking</small>
					</p>
				</a>
			</div>
			<div class="continue-with google">
				<a class="vertically-center-container" href="#">
					<span class="continue-with-icon vertically-center">
						<svg width="25" height="25" viewBox="0 0 25 25"><g fill="none" fill-rule="evenodd"><path d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z" fill="#4285F4"></path><path d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z" fill="#34A853"></path><path d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z" fill="#FBBC05"></path>
						<path d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z" fill="#EA4335"></path></g></svg>
					</span>
					<p class="continue-with-text vertically-center">Continue with Google</p>
				</a>
			</div>
			<div class="email">
				<a class="sign-up-with-email" href="#">Sign in or sign up with email</a>
			</div>
			<p>To use Medium you must have cookies enabled.</p>
			<p>If you sign up with Twitter or Facebook, we’ll start you off with a network by automatically importing any followers/followees or friends already on Medium. Also, we’ll never post to Twitter or Facebook without your permission. For more info, please see Login FAQ.</p>
		</div>
	</modal>
</template>

<script>
	import Modal from './Modal.vue';

	export default {
		props: ['show'],
		components: {
			Modal
		},
		methods: {
			close() {
				this.$emit('close');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.sign-up-modal {
		& /deep/ .modal-content {
			width: 520px;
			height: 715px;
		}

		.header {
			padding: 10px;
			background-color: #f0f0f0;
			text-align: center;
			font-size: 32px;
		}

		.content {
			padding: 32px;

			.continue-with {
				transition: 0.1s ease 0s;
				margin-bottom: 12px;
				border-radius: 2px;

				a {
					display: block;
					padding: 10px 15px;
					color: #fff;
					text-decoration: none;
				}

				.continue-with-icon {
					width: 25px;
					height: 25px;
					margin-right: 5px;
					fill: #fff;
				}

				.continue-with-text {
					margin: 0;

					small {
						color: rgba(255, 255, 255, .65);
					}
				}

				&.twitter {
					background-color: #55acee;
					&:hover {
						background-color: #006daa;
					}
				}

				&.facebook {
					background-color: #3b5998;
					&:hover {
						background-color: #1d315b;
					}
				}

				&.google {
					background-color: #fff;
					border: 1px solid rgba(0, 0, 0, .15);
					&:hover {
						background-color: rgba(0, 0, 0, .05);
					}

					a {
						color: rgba(0, 0, 0, 0.6);
					}
				}
			}

			.email {
				text-align: center;

				.sign-up-with-email {
					color: rgb(0, 171, 107);
					text-decoration: none;

					&:hover {
						color: rgb(28, 153, 99);
						text-decoration: none;
					}
				}
			}
		}
	}
</style>
