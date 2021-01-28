import React from "react";
import IGame from "../../types/IGame";
import { fetchSingleGame } from "../../services/games";
import { StarIcon } from "@chakra-ui/icons";
import {
	AspectRatio,
	Box,
	Center,
	Divider,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Rate from "rc-rate";
import ReactHtmlParser from "react-html-parser";
import RootView from "../../components/RootView";
import { GetServerSideProps } from "next";
import { useLandingPageHeight } from "../../styles/utilities";

interface GameDetailProps {
	label: string;
	value: JSX.Element;
}

const GameDetail: React.FC<GameDetailProps> = ({ label, value }) => {
	return (
		<>
			<Flex justify="space-between">
				<Text fontWeight="bold">{label}</Text>
				{value}
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
	esrb_rating: { id: number; name: string };
}

const gamePage: React.FC<Props> = ({
	rating,
	released,
	background_image,
	name,
	description,
	updated,
	esrb_rating,
}) => {
	const descriptionElement = ReactHtmlParser(description);
	return (
		<RootView>
			<Head>
				<title>{name}</title>
			</Head>
			<Center minH={useLandingPageHeight()}>
				<Flex
					w={["100vw", "100vw", "90vw", "80vw"]}
					alignItems="center"
					justify="center"
				>
					<Flex
						flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
						alignItems="center"
						margin="auto"
					>
						<AspectRatio
							ratio={0.8}
							minW={["80vw", "70vw", "30%"]}
							margin="auto"
							position="relative"
						>
							<Image
								src={background_image}
								w="100%"
								h="100%"
								objectFit="cover"
								position="absolute"
								top="0"
								left={0}
							/>
						</AspectRatio>
						<Box p={2}>
							<Heading as="h2">{name}</Heading>
							<Divider />
							<Box w="100%">{descriptionElement}</Box>
							<Divider />
							<GameDetail
								label="Release Date"
								value={<Text>{released}</Text>}
							/>
							<GameDetail
								label="Score"
								value={<Rate value={rating} disabled={true} />}
							/>
							{esrb_rating && (
								<GameDetail
									label="ESRB Rating"
									value={<Text>{esrb_rating.name}</Text>}
								/>
							)}
							<GameDetail label="Last Updated" value={<Text>{updated}</Text>} />
						</Box>
					</Flex>
				</Flex>
			</Center>
		</RootView>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const id = query.id
		? typeof query.id === "string"
			? parseInt(query.id)
			: parseInt(query.id.join(""))
		: 1;
	const data = await fetchSingleGame(id);
	return { "props": data };
};

export default gamePage;
