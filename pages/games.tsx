import { GetServerSideProps } from "next";
import GameList from "../components/GameList";
import { fetchGames } from "../services/games";
import IGame from "../types/IGame";

interface Props {
	games: IGame[];
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
	const data: any = await fetchGames();
	return { "props": { "games": data.results } };
};

export default games;
