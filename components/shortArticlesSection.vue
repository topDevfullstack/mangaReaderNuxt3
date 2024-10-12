<script setup lang="ts">
import { computed, useRoute } from '#imports';

import { LocationQueryValue, RouteLocationRaw } from '~/.nuxt/vue-router';

import { type FetchError } from 'ofetch';
import { PAGE_SIZE_LIMIT } from '~/constants';
import { AllArticles } from '~/types';

interface IProps {
	data: AllArticles | null | undefined;
	error: FetchError<unknown> | null | undefined;
	pending: boolean;
	handleCreatePageLink: (page: number) => RouteLocationRaw;
}

const route = useRoute();

const props = defineProps<IProps>();

const page = computed(() => {
	if (!props.data?.downs) return;

	const articlesCount = props.data.downsCounts;
	const query = route.query as Record<string, LocationQueryValue>;
	const pageNumber = (route.params.pageNumber || query.page || '1') as string;

	const limit = parseInt(query.limit || PAGE_SIZE_LIMIT, 10);
	const current = parseInt(pageNumber, 10);
	const total = Math.ceil(articlesCount / limit);

	return {
		current,
		total,
	};
});
</script>

<template>
	<Spinner v-if="props.pending" />

	<template v-if="props.data && !props.pending">
		<template v-if="props.data.downs.length !== 0">
			<div class="row">
				<ShortArticle v-for="(item, index) in props.data.downs" :key="index" class="col-3" v-bind="item" />
			</div>

			<div v-if="page?.current && page.total" class="q-pt-lg">
				<Pagination :current-page="page.current" :total-page="page.total" :handle-page-link="props.handleCreatePageLink" />
			</div>
		</template>

		<ErrorBox v-else msg="Information has not been found" :error="error" type="info">
			<q-btn
				v-if="props.data.downs.length === 0 && props.data.downsCounts !== 0"
				no-caps
				color="primary"
				label="Redirect To Page 1"
				:to="{ params: { pageNumber: 1 }, query: {} }"
				replace
			/>
		</ErrorBox>
	</template>

	<ErrorBox v-if="props.error" :error="error" />
</template>
