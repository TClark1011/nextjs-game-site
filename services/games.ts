import fetchFromApi from "../utils/fetchFromApi";
import { gameListPageSize } from "./../constants/parameters";

interface FetchGamesOptions {
	page?: number;
	search?: string;
	ordering?: string;
}

export const fetchGames = ({
	page = 1,
	search = "",
	ordering = "released",
}: FetchGamesOptions): Promise<unknown> =>
	fetchFromApi(
		`/games?page_size=${gameListPageSize}&page=${page}&search=${search}&ordering=${ordering}`
	);

export const fetchSingleGame = (id: number): Promise<unknown> =>
	fetchFromApi(`/games/${id}`);
