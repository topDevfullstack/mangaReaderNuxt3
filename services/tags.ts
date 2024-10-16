import { useAPI } from '~/composables';
import { AllArticles } from '~/types';

export const getPopularTags = (lastly: string) => {
	return useAPI<AllArticles>(`/db/tags/${lastly}`);
};
