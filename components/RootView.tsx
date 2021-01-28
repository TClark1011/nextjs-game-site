import { SearchIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	ChakraStyleProps,
	Flex,
	IconButton,
	Input,
	Link,
	LinkBox,
	Square,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { KeyboardEventHandler, useState } from "react";
import { Home } from "react-feather";
import { topBarHeight } from "../styles/styleVars";

const RootView: React.FC<ChakraStyleProps> = ({ children, ...props }) => {
	const [searchBarContent, setSearchBarContent] = useState<string>("");

	const getSearchUrl = () => `/games?search=${searchBarContent}`;

	const handleSearchBarKeyPress: KeyboardEventHandler = (e) => {
		if (e.key === "Enter") {
			window.location.href = getSearchUrl();
		}
	};
	const router = useRouter();
	return (
		<Box {...props}>
			<Center
				w="100%"
				h={topBarHeight}
				bg="teal.300"
				justifyContent={["flex-end", "flex-end", "center"]}
				paddingX={3}
				position="relative"
			>
				{router.pathname !== "/" && (
					<LinkBox
						boxSize={6}
						position={["absolute", "absolute", "static"]}
						left="0"
						bg="none"
						href="/"
						marginLeft={[0, 2]}
						marginRight={[0, 0, 2]}
					>
						<IconButton
							aria-label="return to home"
							icon={<Home />}
							h="100%"
							w="100%"
							border="2px solid white"
							borderRadius="full"
						/>
					</LinkBox>
				)}
				<Flex
					w="80%"
					maxW="600px"
					bg="white"
					h={6}
					borderRadius="3xl"
					align="center"
				>
					<Input
						h="100%"
						borderRadius="3xl"
						placeholder="Search"
						border="none"
						_focus={{ "outline": "none" }}
						onChange={(e) => setSearchBarContent(e.target.value)}
						onKeyPress={handleSearchBarKeyPress}
					/>
					<Square boxSize={5} mr={1}>
						<IconButton
							h="100%"
							minW="100%"
							aria-label="Search"
							display="flex"
							justifyContent="center"
							borderRadius="3xl"
							bg="teal.300"
							as={Link}
							href={getSearchUrl()}
						>
							<SearchIcon color="white" fontWeight="bold" />
						</IconButton>
					</Square>
				</Flex>
			</Center>
			{children}
		</Box>
	);
};

export default RootView;
