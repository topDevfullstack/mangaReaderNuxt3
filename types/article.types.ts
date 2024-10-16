import { LocationQueryValue } from '~/.nuxt/vue-router';

export interface Article {
	_id: string;
	baseUrl: string;
	hash: string;
	data: string[];
	dataSaver: string[];
	chapter: {
		_id: string;
		id: string;
		type: string;
		attributes: {
			volume: string;
			chapter: string;
			title: string;
			translatedLanguage: string;
			externalUrl: string;
			publishAt: string;
			readableAt: string;
			createdAt: string;
			updatedAt: string;
			pages: number;
			version: number;
		};
		relationships: {
			id: string;
			type: string;
		}[];
		manga: {
			_id: string;
			id: string;
			type: string;
			attributes: {
				title: {
					[lang: string]: string;
				};
				altTitles: {
					[lang: string]: string;
				};
				description: {
					[lang: string]: string;
				};
				isLocked: boolean;
				links: {
					[lang: string]: string;
				};
				originalLanguage: string;
				lastVolume: string;
				lastChapter: string;
				publicationDemographic: string;
				status: string;
				year: number;
				contentRating: string;
				tags: {
					id: string;
					type: string;
					attributes: {
						name: {
							[lang: string]: string;
						};
						description: {
							[lang: string]: string;
						};
						group: string;
						version: number;
					};
					relationships: {
						id: string;
						type: string;
					}[];
				}[];
				state: string;
				chapterNumbersResetOnNewVolume: boolean;
				createdAt: string;
				updatedAt: string;
				version: number;
				availableTranslatedLanguages: string[];
				latestUploadedChapter: string;
			};
			relationships: {
				id: string;
				type: string;
			}[];
			__v: number;
		};
		__v: number;
	};
	__v: number;
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
