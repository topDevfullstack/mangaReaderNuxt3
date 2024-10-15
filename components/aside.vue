<script setup lang="ts">
import { fasHashtag } from '@quasar/extras/fontawesome-v5';
import { getPopularTags } from '~/services';

const { data, error } = await getPopularTags();
</script>

<template>
	<aside :class="$style.aside">
		<h4 class="q-pb-md flex row no-wrap justify-between items-center">
			<span class="shrink">Trending</span>
		</h4>
		<div class="row">
			<input id="html" type="radio" name="fav_language" value="HTML" />
			<label for="html">Today</label>
			<input id="css" type="radio" name="fav_language" value="CSS" />
			<label for="css">Week</label>
			<input id="javascript" type="radio" name="fav_language" value="JavaScript" />
			<label for="javascript">Monthly</label>
		</div>
		<section :class="$style.popularTags">
			<div v-if="data && data.tags" class="flex row wrap q-gutter-sm">
				<q-btn
					v-for="(item, index) in data.tags"
					:key="index"
					rounded
					no-caps
					unelevated
					size="md"
					color="dark"
					text-color="white"
					:label="item"
					:icon="fasHashtag"
					class="text-weight-regular"
					:to="`/?tag=${item}`"
				/>
			</div>

			<ErrorBox v-else :error="error" :msg="error?.message" />
		</section>
	</aside>
</template>

<style lang="scss" module>
.aside {
	& > section {
		background-color: #33394f;
		padding: 1rem;
		border-radius: 10px;
	} // & > section
} // .aside
.popularTags {
	:global {
		.q-icon {
			font-size: 0.85rem;
			margin-right: 6px;
		} // .q-icon
	} // :global
} // .popularTags
</style>
