import {
	Box,
	ChakraStyleProps,
	Image,
	Link,
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
					<Image
						key={id}
						src={background_image}
						w="100%"
						h="350px"
						objectFit="cover"
					/>
					<Link fontWeight="bold" href={`/games/${id}`}>
						{name}
					</Link>
				</Box>
			))}
		</SimpleGrid>
	);
};

export default GameList;
