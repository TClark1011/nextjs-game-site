import { SearchIcon } from "@chakra-ui/icons";
import {
	AspectRatio,
	Box,
	Center,
	ChakraStyleProps,
	Flex,
	IconButton,
	Input,
	Square,
} from "@chakra-ui/react";

const RootView: React.FC<ChakraStyleProps> = ({ children, ...props }) => {
	return (
		<Box {...props}>
			<Center w="100%" h={7} bg="teal.300">
				<Flex
					w="80%"
					maxW="600px"
					bg="white"
					h="70%"
					borderRadius="3xl"
					align="center"
					// overflow="hidden"
				>
					<Input
						h="100%"
						borderRadius="3xl"
						placeholder="Search"
						border="none"
						_focus={{ "outline": "none" }}
					></Input>
					<Square boxSize={5} mr={1}>
						<IconButton
							h="100%"
							minW="100%"
							aria-label="Search"
							display="flex"
							justifyContent="center"
							borderRadius="3xl"
							bg="teal.200"
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
