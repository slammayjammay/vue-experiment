<template>
	<Modal class="sign-up-modal"
		:show="show"
		transition="ScaleTransition"
		v-on:close="close"
	>
		<div class="header">
			<h2>Medium</h2>
		</div>
		<div class="content">
			<p>Sign in to Medium to connect with voices and perspectives that matter.</p>
			<div class="continue-with twitter">Continue with Twitter</div>
			<div class="continue-with facebook">Continue with Facebook</div>
			<div class="continue-with google">Continue with Google</div>
			<div class="email">
				<span class="sign-up-with-email">Sign in or sign up with email</span>
			</div>
			<p>To use Medium you must have cookies enabled.</p>
			<p>If you sign up with Twitter or Facebook, we’ll start you off with a network by automatically importing any followers/followees or friends already on Medium. Also, we’ll never post to Twitter or Facebook without your permission. For more info, please see Login FAQ.</p>
		</div>
	</Modal>
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
				padding: 10px;
				margin-bottom: 10px;

				&.twitter {
					background-color: #006daa;
					color: #fff;
				}

				&.facebook {
					background-color: #1d315b;
					color: #fff;
				}

				&.google {
					background-color: rgba(0, 0, 0, 0.05);
				}
			}

			.email {
				text-align: center;

				.sign-up-with-email {
					color: rgb(0, 171, 107);

					&:hover {
						color: rgb(28, 153, 99);
					}
				}
			}
	}
	}
</style>
