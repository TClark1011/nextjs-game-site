import { apiRootUrl } from "../constants/urls";

const defaultOptions: RequestInit = {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.API_KEY,
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
	},
};

const fetchFromApi = (
	url: string,
	options: RequestInit = {}
): Promise<unknown> =>
	fetch(apiRootUrl + url, { ...defaultOptions, ...options }).then((data) =>
		data.json()
	);

export default fetchFromApi;
