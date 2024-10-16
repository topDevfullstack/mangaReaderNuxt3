import { useAPI } from '~/composables';

export const getPopularTags = (lastly: string) => {
	return useAPI<{ tags: string[] }>(`/db/tags/${lastly}`);
};
