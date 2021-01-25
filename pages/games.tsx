import { GetServerSideProps } from "next";
import GameList from "../components/GameList";
import { fetchGames } from "../services/games";

interface Props {
	games: unknown[];
}

const games: React.FC<Props> = ({ games, ...props }) => {
	return (
		<div>
			<h2>Games Page</h2>
			<GameList games={games} />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await fetchGames();
	console.log("(GameList) data: ", data);
	return { "props": { "games": data.results } };
};

export default games;
