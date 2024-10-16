<script setup lang="ts">
import { getPopularTags } from '~/services';

import { ref } from 'vue';
import RadioButton from './RadioButton.vue';

const { data, error } = await getPopularTags('today');
// console.log(data, error);

// Define your reactive state variables
const selected = ref('today');
const options = [
	{ value: 'today', label: 'Today' },
	{ value: 'week', label: 'Week' },
	{ value: 'monthly', label: 'Monthly' },
];
const radioName = 'my-radio-group';

const radioSelected = async (value) => {
	const { data, error } = await getPopularTags(value);
};
</script>

<template>
	<aside :class="$style.aside">
		<h4 class="q-pb-md flex row no-wrap justify-between items-center">
			<span class="shrink">Trending</span>
		</h4>
		<div class="row">
			<RadioButton
				v-for="option in options"
				:key="option.value"
				v-model="selected"
				:name="radioName"
				:value="option.value"
				:label="option.label"
				class="col-3"
				@radio-selected="radioSelected"
			/>
		</div>
		<!-- <section :class="$style.popularTags">
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
		</section> -->
	</aside>
</template>

<style lang="scss" module>
.aside {
	& > div {
		justify-content: space-between;
	}

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
