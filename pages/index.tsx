import Head from "next/head";
import GameList from "../components/GameList";

const Home: React.FC = () => {
	return (
		<div>
			<Head>
				<title>Game Site</title>
			</Head>
			<h1>Hello NextJS</h1>
			<GameList />
		</div>
	);
};

export default Home;
