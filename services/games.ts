import { gameListPageSize } from "./../constants/parameters";

export const fetchGames = () =>
	fetch(
		`https://rawg-video-games-database.p.rapidapi.com/games?page_size=${gameListPageSize}`,
		{
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "" + process.env.API_KEY + "",
				"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
			},
		}
	)
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.error(err);
		});
