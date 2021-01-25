const GameList: React.FC = ({ ...props }) => {
	fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
		"method": "GET",
		"mode": "cors",
		"headers": {
			"x-rapidapi-key": "1bf61158f1mshd98c2557065da7bp1c6a05jsn3c2ab125559c",
			"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		},
	})
		.then((data) => {
			return data.json();
		})
		.then((result) => {
			console.log("(GameList) : result", result);
		});
	return <div {...props}></div>;
};

export default GameList;
