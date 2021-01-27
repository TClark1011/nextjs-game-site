import {
	Center,
	ChakraStyleProps,
	ComponentWithAs,
	Flex,
	Heading,
	IconButton,
	IconProps,
	Link,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import GameList from "../components/GameList";
import { fetchGames } from "../services/games";
import IGame from "../types/IGame";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import RootView from "../components/RootView";
import { ReactNode } from "react";

interface Props {
	games: IGame[];
	page: number;
	search?: string;
}

interface PageButtonProps extends ChakraStyleProps {
	type: "next" | "previous";
	Icon: ComponentWithAs<"svg", IconProps>;
}

const games: React.FC<Props> = ({ games, page = 1, search = "" }) => {
	const getSearchParam = () => (search ? `&search=${search}` : "");

	const PageButton: React.FC<PageButtonProps> = ({ type, Icon, ...props }) => (
		<IconButton
			aria-label={`${type}-page`}
			as={Link}
			href={`/games?page=${
				type === "next" ? page + 1 : page - 1
			}${getSearchParam()}`}
			isDisabled={type === "previous" && page === 1}
			bg="teal.300"
			_hover={{ "bg": "teal.200" }}
			h={6}
			minW={6}
			borderRadius="full"
			color="white"
			{...props}
		>
			<Icon />
		</IconButton>
	);

	return (
		<RootView>
			<Head>
				<title>Games</title>
			</Head>
			<Heading as="h2">Games</Heading>
			<GameList games={games} w="100%" />
			<Center>
				<Flex width={9} justify="space-between">
					<PageButton type="previous" Icon={ArrowBackIcon} />
					<PageButton type="next" Icon={ArrowForwardIcon} />
				</Flex>
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
