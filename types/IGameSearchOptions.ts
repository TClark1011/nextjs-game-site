interface IGameSearchOptions {
	page?: number;
	page_size?: number;
	search?: string;
	search_precise?: boolean;
	search_exact?: boolean;
	parent_platforms?: string;
	platforms?: string;
	stores?: string;
	developers?: string;
	publishers?: string;
	genres?: string;
	tags?: string;
	creators?: string;
	dates?: string;
	updated?: string;
	metacritic?: string;
	exclude_collection?: string;
	exclude_additions?: boolean;
	exclude_game_series?: boolean;
	ordering?:
		| "name"
		| "released"
		| "added"
		| "created"
		| "updated"
		| "rating"
		| "metacritic"
		| "-name"
		| "-released"
		| "-added"
		| "-created"
		| "-updated"
		| "-rating"
		| "-metacritic";
}

export default IGameSearchOptions;
