import { Box, Center, Heading, IconButton, Link } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import GameList from "../components/GameList";
import { fetchGames } from "../services/games";
import IGame from "../types/IGame";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface Props {
	games: IGame[];
	page: number;
}

const games: React.FC<Props> = ({ games, page = 1 }) => {
	return (
		<Box>
			<Head>
				<title>Games</title>
			</Head>
			<Heading as="h2">Games</Heading>
			<GameList games={games} w="100%" />
			<Center>
				<IconButton
					aria-label="previous-page"
					as={Link}
					href={`/games?page=${page - 1}`}
					isDisabled={page === 1}
				>
					<ArrowBackIcon />
				</IconButton>
				<IconButton
					aria-label="next-page"
					as={Link}
					href={`/games?page=${page + 1}`}
				>
					<ArrowForwardIcon />
				</IconButton>
			</Center>
		</Box>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const page: number = query.page ? parseInt(query.page as string) : 1;
	const data: any = await fetchGames(query);
	return {
		"props": { "games": data.results, page },
	};
};

export default games;
