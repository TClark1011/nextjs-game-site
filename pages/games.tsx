import {
	Box,
	Button,
	Center,
	ChakraStyleProps,
	ComponentWithAs,
	Flex,
	Heading,
	IconButton,
	IconProps,
	Link,
	Select,
	Text,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import GameList from "../components/GameList";
import { fetchGames } from "../services/games";
import IGame from "../types/IGame";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import RootView from "../components/RootView";
import { orderOptions } from "../constants/parameters";
import toTitleCase from "to-title-case";
import { useState } from "react";

interface Props {
	games: IGame[];
	page: number;
	search?: string;
	ordering?: string;
}

interface PageButtonProps extends ChakraStyleProps {
	type: "next" | "previous";
	Icon: ComponentWithAs<"svg", IconProps>;
}

const games: React.FC<Props> = ({ ordering, games, page = 1, search = "" }) => {
	const getSearchParam = () => (search ? `&search=${search}` : "");
	const getOrderingParam = () => (ordering ? `&ordering=${ordering}` : "");

	const PageButton: React.FC<PageButtonProps> = ({ type, Icon, ...props }) => (
		<IconButton
			aria-label={`${type}-page`}
			as={Link}
			href={`/games?page=${
				type === "next" ? page + 1 : page - 1
			}${getSearchParam()}${getOrderingParam()}`}
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

	const [selectedOrderingType, setSelectedOrderingType] = useState(ordering);
	const [orderingDirection, setOrderingDirection] = useState<string>("-");

	return (
		<RootView>
			<Head>
				<title>Games</title>
			</Head>
			<Flex
				justify="space-between"
				align="center"
				px={3}
				py={2}
				w="100%"
				flexWrap="wrap"
			>
				<Heading as="h2">Games</Heading>
				<Flex align="center" flexWrap="wrap">
					<Select
						h={6}
						w={10}
						bg="white"
						px={1}
						defaultValue={ordering}
						onChange={(e) => setSelectedOrderingType(e.target.value)}
					>
						{orderOptions.map((item) => (
							<option value={item} key={item}>
								{toTitleCase(item)}
							</option>
						))}
					</Select>
					<Select
						h={6}
						w={10}
						bg="white"
						px={1}
						onChange={(e) => {
							console.log("(games) ordering direction: ", e.target.value);
							setOrderingDirection(e.target.value);
						}}
						defaultValue={orderingDirection}
					>
						<option value="-">Descending</option>
						<option value="">Ascending</option>
					</Select>
					<Button
						h={6}
						as={Link}
						href={`/games?ordering=${
							orderingDirection + selectedOrderingType
						}${getSearchParam()}`}
					>
						Sort
					</Button>
				</Flex>
			</Flex>
			<GameList games={games} w="100%" />
			<Center>
				<Flex width={9} justify="space-between" my={3}>
					<PageButton type="previous" Icon={ArrowBackIcon} />
					<PageButton type="next" Icon={ArrowForwardIcon} />
				</Flex>
			</Center>
		</RootView>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const page: number = query.page ? parseInt(query.page as string) : 1;
	const ordering: string = query.ordering
		? (query.ordering as string)
		: "released";
	const search: string = query.search
		? typeof query.search === "string"
			? query.search
			: query.search.join()
		: "";
	const data: any = await fetchGames(query);
	return {
		"props": { "games": data.results, page, search, ordering },
	};
};

export default games;
