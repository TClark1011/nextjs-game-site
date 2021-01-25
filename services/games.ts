import fetchFromApi from "../utils/fetchFromApi";
import { gameListPageSize } from "./../constants/parameters";

export const fetchGames = (): Promise<unknown> =>
	fetchFromApi(`/games?page_size=${gameListPageSize}`);

export const fetchSingleGame = (id: number): Promise<unknown> =>
	fetchFromApi(`/games/${id}`);
