<script setup lang="ts">
import { computed, definePageMeta, navigateTo, ref, useRoute } from '#imports';

import { Ref } from 'nuxt/dist/app/compat/vue-demi';
import { useNotify } from '~/composables';
import { ERROR_SEPARATOR } from '~/constants';
import { getSingleArticle, updateArticle } from '~/services';
import { authState } from '~/store';
import { NewArticle } from '~/types';

definePageMeta({
	middleware: [
		async () => {
			const route = useRoute();

			const auth = authState();
			const { data } = await getSingleArticle(route.params._id as string);

			if (!data || !data.value) return '/';

			if (auth.get.value?.username !== data.value?.article.chapter.manga.type) return '/';
		},
	],
});

const route = useRoute();
const isLoading = ref(false);

const _id = computed(() => {
	return route.params._id as string;
});

const { data } = await getSingleArticle(_id.value);

const handleSubmitForm = (newData: Ref<NewArticle>) => {
	isLoading.value = true;

	return updateArticle(_id.value, newData.value)
		.then((res) => {
			const resData = res.data.value;
			const error = res.error.value;

			if (resData) {
				useNotify({
					message: 'A new article has been created successfully',
					type: 'success',
				});

				navigateTo(`/db/list/${resData._id}`);
			}

			if (error) {
				useNotify({
					message: error.message.split(ERROR_SEPARATOR).join('<br />'),
					type: 'error',
				});
			}

			return res;
		})
		.catch((err) => {
			useNotify({
				message: 'An error has occurred, please check them again.',
				type: 'error',
			});

			console.error(err);
		})
		.finally(() => {
			isLoading.value = false;
		});
};
</script>

<template>
	<Head>
		<Title>Nuxt3 Realworld | create new article</Title>
	</Head>

	<p class="text-h4 q-pb-lg">Edit Article:</p>

	<AddArticle
		:loading="isLoading"
		:body="data?.article.chapter.manga.attributes.title.en"
		:description="data?.article.chapter.manga.attributes.description.en"
		:title="data?.article.chapter.manga.attributes.title.en"
		@on-submit="handleSubmitForm"
	/>
</template>
