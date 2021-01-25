interface IGame {
	id: number;
	slug: string;
	name: string;
	released: string;
	tba: boolean;
	background_image: string;
	rating: number;
	rating_top: number;
	ratings: Array<unknown>;
	ratings_count: number;
	reviews_text_count: number;
	added: number;
	added_by_status: unknown;
	metacritic: number;
	playtime: number;
	suggestions_count: number;
	updated: string;
	user_game: unknown;
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	platforms: unknown;
	parent_platforms: unknown;
	genres: unknown;
	stores: unknown;
	clip: unknown;
	tags: unknown;
	esrb_rating: unknown;
	short_screenshots: unknown;
}

export default IGame;
