import {
	Box,
	ChakraStyleProps,
	Image,
	Link,
	LinkBox,
	SimpleGrid,
} from "@chakra-ui/react";
import IGame from "../types/IGame";

interface Props extends ChakraStyleProps {
	games: IGame[];
}

const GameList: React.FC<Props> = ({ games, ...props }) => {
	return (
		<SimpleGrid columns={[2, 3, 4, 6, 8]} {...props}>
			{games.map(({ name, background_image, id }, index) => (
				<Box>
					<LinkBox
						w="100%"
						h="350px"
						padding={1}
						_hover={{ "padding": 0 }}
						transitionDuration="0.1s"
						href={`/games/${id}`}
					>
						<Image
							boxShadow="md"
							key={id}
							src={background_image}
							w="100%"
							h="100%"
							objectFit="cover"
						/>
					</LinkBox>
					<Link fontWeight="bold" href={`/games/${id}`}>
						{name}
					</Link>
				</Box>
			))}
		</SimpleGrid>
	);
};

export default GameList;
