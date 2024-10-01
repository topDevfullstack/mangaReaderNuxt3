<script setup lang="ts">
import { fasChevronLeft, fasChevronRight } from '@quasar/extras/fontawesome-v5';
</script>

<template>
	<q-header reveal class="bg-dark text-white no-border" :class="$style.header">
		<q-toolbar>
			<!-- <q-avatar square size="48px">
				<NuxtLink to="/" class="block full-width full-height">
					<img src="~/assets/images/logo.png" width="48" height="48" alt="Realworld Logo" />
				</NuxtLink>
			</q-avatar> -->
			<span>LOGO</span>

			<nav class="nav-wrapper relative-position self-stretch q-px-md" role="navigation">
				<q-tabs class="q-px-xs" :right-icon="fasChevronRight" :left-icon="fasChevronLeft">
					<q-route-tab label="All" to="/" exact />
					<q-route-tab label="Action" to="/action" exact />
					<q-route-tab label="Love Story" to="/love" exact />
					<q-route-tab label="Adventure" to="/adventure" exact />
					<q-route-tab label="Most Popular" to="/popular" exact />
				</q-tabs>
			</nav>

			<div class="search-wrapper q-px-lg col-grow">
				<q-input filled dense borderless model-value="" name="search" type="text" inputmode="text">
					<template #prepend>
						<SearchIcon />
					</template>
				</q-input>
			</div>

			<div class="flex q-px-md" :class="$style.buttonGroup">
				<q-btn
					flat
					rounded
					class="github-btn"
					href="https://github.com/MR-Mostafa/nuxt3-realworld-example-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubIcon />
				</q-btn>
			</div>
		</q-toolbar>
	</q-header>
</template>

<style lang="scss" module>
.header {
	// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	flex: 0 0 auto;

	:global {
		.q-toolbar {
			& > *:not(.nav-wrapper) {
				padding-top: 10px;
				padding-bottom: 10px;
				box-sizing: content-box;
			}
		} // .q-toolbar

		h1,
		h2 {
			line-height: 1.25rem;
		}

		.q-input {
			max-width: 320px;
			background-color: white;
		} // .q-input
	} // :global
} // .header

.buttonGroup {
	:global {
		.q-btn {
			width: 48px;
			height: 48px;
			box-sizing: border-box;
			padding: 12px;
			display: inline-flex;
			align-items: center;
			justify-content: center;

			&:not(:first-child) {
				margin-left: 15px;
			}
		}

		img {
			width: 34px !important;
			height: 34px !important;
			object-fit: contain;
		}

		svg {
			width: 32px !important;
			height: 32px !important;
		}

		.q-icon {
			display: none;
		}

		.user-btn {
			padding: 10px;
		}
	} // :global
} // .buttonGroup
</style>

<style lang="scss" scoped>
.q-header--hidden {
	transform: translateY(-130%) !important;
}
</style>
