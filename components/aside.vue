<script setup lang="ts">
import { type FetchError } from 'ofetch';
import { ref } from 'vue';
import { getPopularTags } from '~/services';
import { AllArticles } from '~/types';
import RadioButton from './RadioButton.vue';

interface IProps {
	data: AllArticles | null | undefined;
	error: FetchError<unknown> | null | undefined;
	pending: boolean;
}

const { data, error } = await getPopularTags<IProps>('today');
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
	const { data, error } = await getPopularTags<IProps>(value);
	// console.log(data, error);
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
		<section :class="$style.popularTags">
			<div v-if="data && data.downs" class="q-gutter-sm">
				<ArticleTags size="md" color="dark" text-color="white" class="text-weight-regular col-12" :data="data" />
			</div>

			<ErrorBox v-else :error="error" :msg="error?.message" />
		</section>
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
		margin-top: 15px;
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
