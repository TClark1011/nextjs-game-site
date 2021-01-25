import React from "react";
import { useRouter } from "next/router";
import IGame from "../../types/IGame";
import { fetchSingleGame } from "../../services/games";
import {
	Box,
	Center,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	List,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";

interface GameDetailProps {
	label: string;
	value: string | number;
	link?: string;
}

const GameDetail: React.FC<GameDetailProps> = ({ link, label, value }) => (
	<>
		<Flex justify="space-between">
			<Text fontWeight="bold">{label}</Text>
			{!link && <Text>{value}</Text>}
			{link && <Link href={link}>{value}</Link>}
		</Flex>
		<Divider />
	</>
);

interface Props extends IGame {
	name: string;
	background_image: string;
	released: string;
	rating: number;
	description: string;
	updated: string;
	reddit_url?: string;
}

const gamePage: React.FC<Props> = ({
	rating,
	released,
	background_image,
	name,
	description,
	reddit_url,
	updated,
	platforms,
}) => {
	console.log("([id]) platforms: ", platforms);
	return (
		<Box>
			<Head>
				<title>{name}</title>
			</Head>
			<Center>
				<Box w="80vw">
					<Heading as="h2">{name}</Heading>
					<Image src={background_image} w="100%" h="150vw" objectFit="cover" />
					<Box>
						<Text w="100%">{description}</Text>
						<Divider />
						<GameDetail label="Release Date" value={released} />
						<GameDetail label="Rating" value={rating} />
						<GameDetail label="Last Updated" value={updated} />
						{reddit_url && (
							<GameDetail label="Subreddit" value="Link" link={reddit_url} />
						)}
					</Box>
				</Box>
			</Center>
		</Box>
	);
};

export const getServerSideProps = async (context): Promise<unknown> => {
	const data = await fetchSingleGame(context.query.id);
	return { "props": data };
};

export default gamePage;
