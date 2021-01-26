import fetchFromApi from "../utils/fetchFromApi";
import { gameListPageSize } from "./../constants/parameters";

interface FetchGamesOptions {
	page?: number;
	search?: string;
}

export const fetchGames = ({
	page = 1,
	search = "",
}: FetchGamesOptions): Promise<unknown> =>
	fetchFromApi(
		`/games?page_size=${gameListPageSize}&page=${page}&search=${search}`
	);

export const fetchSingleGame = (id: number): Promise<unknown> =>
	fetchFromApi(`/games/${id}`);

// export const searchGames = (
// 	query: string,
// 	{ page = 1 }: FetchGamesOptions
// ): Promise<unknown> =>
// 	fetchFromApi(
// 		`/games?page_size=${gameListPageSize}&page=${page}&search=${query}`
// 	);
