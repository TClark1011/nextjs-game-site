import React from "react";
import { useRouter } from "next/router";
import IGame from "../../types/IGame";
import { fetchSingleGame } from "../../services/games";
import { StarIcon } from "@chakra-ui/icons";
import {
	AspectRatio,
	Box,
	Button,
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
import ReactHtmlParser from "react-html-parser";
import RootView from "../../components/RootView";

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
	const starArray = [];
	for (let i = 0; i < Math.round(rating); i++) {
		starArray.push(<StarIcon key={i} />);
	}
	const descriptionElement = ReactHtmlParser(description);
	return (
		<RootView>
			<Head>
				<title>{name}</title>
			</Head>
			<Center>
				<Flex
					w={["100vw", "100vw", "90vw", "80vw"]}
					h="100vh"
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
							<GameDetail
								label="ESRB Rating"
								value={<Text>{esrb_rating.name}</Text>}
							/>
							<GameDetail label="Last Updated" value={<Text>{updated}</Text>} />
						</Box>
					</Flex>
				</Flex>
			</Center>
		</RootView>
	);
};

export const getServerSideProps = async (context): Promise<unknown> => {
	const data = await fetchSingleGame(context.query.id);
	return { "props": data };
};

export default gamePage;
