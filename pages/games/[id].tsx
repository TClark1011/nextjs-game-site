import React from "react";
import { useRouter } from "next/router";
import IGame from "../../types/IGame";
import { fetchSingleGame } from "../../services/games";
import { StarIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	ChakraComponent,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Rate from "rc-rate";

interface GameDetailProps {
	label: string;
	value: JSX.Element | JSX.Element[];
}

const GameDetail: React.FC<GameDetailProps> = ({ label, value }) => {
	return (
		<>
			<Flex justify="space-between">
				<Text fontWeight="bold">{label}</Text>
				<Text>{value}</Text>
			</Flex>
			<Divider />
		</>
	);
};

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
	const starArray = [];
	for (let i = 0; i < Math.round(rating); i++) {
		starArray.push(<StarIcon key={i} />);
	}
	return (
		<Box>
			<Head>
				<title>{name}</title>
			</Head>
			<Center>
				<Box w="80vw">
					<Flex
						flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
						alignItems="center"
						h="100vh"
					>
						<Image
							src={background_image}
							w={["300px", "350px", "400px"]}
							h={["450px", "475px", "600px"]}
							objectFit="cover"
						/>
						<Box>
							<Heading as="h2">{name}</Heading>
							<Divider />
							<Text w="100%">{description}</Text>
							<Divider />
							<GameDetail
								label="Release Date"
								value={<Text>{released}</Text>}
							/>
							<GameDetail label="Rating" value={<Rate value={rating} />} />
							<GameDetail label="Last Updated" value={<Text>{updated}</Text>} />
							{reddit_url && (
								<GameDetail
									label="Subreddit"
									value={<Link href={reddit_url}>Link</Link>}
								/>
							)}
						</Box>
					</Flex>
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
