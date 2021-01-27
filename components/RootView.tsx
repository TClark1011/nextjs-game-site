import { SearchIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	ChakraStyleProps,
	Flex,
	IconButton,
	Input,
	Link,
	Square,
} from "@chakra-ui/react";
import { KeyboardEventHandler, useState } from "react";

const RootView: React.FC<ChakraStyleProps> = ({ children, ...props }) => {
	const [searchBarContent, setSearchBarContent] = useState<string>("");

	const getSearchUrl = () => `/games?search=${searchBarContent}`;

	const handleSearchBarKeyPress: KeyboardEventHandler = (e) => {
		if (e.key === "Enter") {
			window.location.href = getSearchUrl();
		}
	};
	return (
		<Box {...props}>
			<Center w="100%" h={7} bg="teal.300">
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
					></Input>
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
