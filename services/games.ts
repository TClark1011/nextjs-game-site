import fetchFromApi from "../utils/fetchFromApi";
import { gameListPageSize } from "./../constants/parameters";

interface FetchGamesOptions {
	page?: number;
}

export const fetchGames = ({ page = 1 }: FetchGamesOptions): Promise<unknown> =>
	fetchFromApi(`/games?page_size=${gameListPageSize}&page=${page}`);

export const fetchSingleGame = (id: number): Promise<unknown> =>
	fetchFromApi(`/games/${id}`);
