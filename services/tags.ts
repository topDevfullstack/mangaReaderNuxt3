import { useAPI } from '~/composables';

export const getPopularTags = () => {
	return useAPI<{ tags: string[] }>('/db/tags');
};
