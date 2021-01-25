import fetchFromApi from "../utils/fetchFromApi";
import { gameListPageSize } from "./../constants/parameters";

export const fetchGames = () =>
	fetchFromApi(`/games?page_size=${gameListPageSize}`);
