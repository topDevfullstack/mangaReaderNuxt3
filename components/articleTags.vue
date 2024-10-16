<script setup lang="ts">
import { fasHashtag } from '@quasar/extras/fontawesome-v5';
import { AllArticles } from '~/types';

const props = defineProps<AllArticles>();
console.log(props);
</script>
<template>
	<q-list tag="ul" dense :class="$style.tagsWrapper" class="flex row no-wrap text-body2 items-center justify-end">
		<q-item v-for="(item, index) in props.downs" :key="index" dense tag="li" class="col-12">
			<q-btn dense flat no-caps :icon="fasHashtag" :label="item.chapter.manga.attributes.title.en" />
		</q-item>
	</q-list>
</template>

<style lang="scss" module>
.tagsWrapper {
	:global {
		.q-item {
			min-height: auto;
			padding: 4px 4px 4px 5px;
			position: relative;
		} // .q-item

		.q-icon {
			font-size: 0.75rem;
		}
	} // :global
} // .tagsWrapper
</style>
