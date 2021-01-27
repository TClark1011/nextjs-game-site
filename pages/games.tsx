import { Center, Heading, IconButton, Link } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import GameList from "../components/GameList";
import { fetchGames } from "../services/games";
import IGame from "../types/IGame";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import RootView from "../components/RootView";

interface Props {
	games: IGame[];
	page: number;
	search?: string;
}

const games: React.FC<Props> = ({ games, page = 1, search = "" }) => {
	const getSearchParam = () => (search ? `&search=${search}` : "");

	return (
		<RootView>
			<Head>
				<title>Games</title>
			</Head>
			<Heading as="h2">Games</Heading>
			<GameList games={games} w="100%" />
			<Center>
				<IconButton
					aria-label="previous-page"
					as={Link}
					href={`/games?page=${page - 1}${getSearchParam()}`}
					isDisabled={page === 1}
				>
					<ArrowBackIcon />
				</IconButton>
				<IconButton
					aria-label="next-page"
					as={Link}
					href={`/games?page=${page + 1}${getSearchParam()}`}
				>
					<ArrowForwardIcon />
				</IconButton>
			</Center>
		</RootView>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const page: number = query.page ? parseInt(query.page as string) : 1;
	const search: string = query.search
		? typeof query.search === "string"
			? query.search
			: query.search.join()
		: "";
	const data: any = await fetchGames(query);
	return {
		"props": { "games": data.results, page, search },
	};
};

export default games;
