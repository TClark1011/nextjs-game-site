import { Box, Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import GameList from "../components/GameList";
import { fetchGames } from "../services/games";
import IGame from "../types/IGame";

interface Props {
	games: IGame[];
}

const games: React.FC<Props> = ({ games }) => {
	return (
		<Box>
			<Head>
				<title>Games</title>
			</Head>
			<Heading as="h2">Games</Heading>
			<GameList games={games} w="100%" />
		</Box>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const data: any = await fetchGames();
	return { "props": { "games": data.results } };
};

export default games;
