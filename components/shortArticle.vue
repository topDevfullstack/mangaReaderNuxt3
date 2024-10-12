<script setup lang="ts">
import { Article } from '~/types';

const props = defineProps<Article>();
</script>
<template>
	<q-card tag="article" :class="$style.article">
		<q-card-section class="q-pa-lg">
			<p class="text-h6 text-weight-light">{{ props.chapter.manga.title }}</p>

			<footer class="q-pt-lg flex row items-center justify-between">
				<BtnMore :href="`/article/${props._id}`" />
				<!-- <ArticleTags :tag-list="props.tagList" class="q-pl-lg" /> -->
			</footer>
		</q-card-section>
	</q-card>
</template>

<style lang="scss" module>
.article {
	background: #252d3a;
	box-shadow: 10px 10px 0px rgba(2, 2, 2, 0.45);
	border-radius: 15px;

	& + .article {
		margin-top: 2.5rem;
	}

	:global {
		h1 {
			overflow: hidden;
			max-height: 64px;

			a {
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}
} // .article
</style>
