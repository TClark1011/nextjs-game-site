import {
	Box,
	Button,
	Center,
	Heading,
	Link,
	LinkBox,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";
import RootView from "../components/RootView";
import { useLandingPageHeight } from "../styles/utilities";

const Home: React.FC = () => {
	return (
		<RootView>
			<Head>
				<title>Game Site</title>
			</Head>
			<Center h={useLandingPageHeight()}>
				<Box>
					<Heading as="h1" marginBottom={3}>
						Untitled Video Game Site
					</Heading>
					<Text>
						This is a website I made to teach myself Next.JS and Chakra UI.
					</Text>
					<Text>
						It allows you to browse data from the{" "}
						<Link href="https://api.rawg.io/docs/">
							RAWG Video Games Database Api
						</Link>
						.
					</Text>
					<Center marginTop={3} href="/games" as={LinkBox}>
						<Button>Browse Games</Button>
					</Center>
				</Box>
			</Center>
		</RootView>
	);
};

export default Home;
