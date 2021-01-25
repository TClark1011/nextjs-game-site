import { api_root } from "../constants/urls";

const defaultOptions: RequestInit = {
	"mode": "cors",
	"headers": {
		"Client-ID": process.env.API_CLIENT_ID,
		"Authorization": `Bearer ${localStorage.getItem("api_token") || "_"}`,
	},
};

const getOptions = (
	options: RequestInit = {},
	fields = "*",
	method = "GET"
) => ({
	...defaultOptions,
	...options,
	method,
	"headers": { ...defaultOptions.headers, fields },
});

export default {
	"get": (
		url: string,
		options: RequestInit = {},
		fields = "*"
	): Promise<unknown> =>
		fetch(`${api_root}/${url}`, getOptions(options, fields)),
	"post": (
		url: string,
		options: RequestInit = {},
		fields = "*"
	): Promise<unknown> =>
		fetch(`${api_root}/${url}`, getOptions(options, fields)).then((data) =>
			data.json()
		),
};
