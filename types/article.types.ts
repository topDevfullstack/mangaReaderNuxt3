import { LocationQueryValue } from '~/.nuxt/vue-router';

export interface Article {
	_id: string;
	baseUrl: string;
	data: string[];
	dataSaver: string[];
	chapter: {
		_id: string;
		id: string;
		type: string;
		title: string;
		manga: {
			_id: string;
			id: string;
			type: string;
			title: string;
			createdAt: string;
			updatedAt: string;
			__v: number;
		};
		createdAt: string;
		updatedAt: string;
		__v: number;
	};
}

export interface AllArticles {
	downs: Article[];
	downsCounts: number;
}

export interface GetAllArticlesProps {
	tag?: LocationQueryValue | LocationQueryValue[];
	author?: LocationQueryValue | LocationQueryValue[];
	favorited?: LocationQueryValue | LocationQueryValue[];
	offset?: LocationQueryValue | LocationQueryValue[];
	limit?: LocationQueryValue | LocationQueryValue[];
}

export interface NewArticle {
	title: string;
	description: string;
	body: string;
	tagList: string[];
}
