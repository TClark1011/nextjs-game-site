import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import IGame from "../types/IGame";

interface Props {
	games: IGame[];
}

const GameList: React.FC<Props> = ({ games, ...props }) => {
	return (
		<div {...props}>
			<SimpleGrid columns={[2, 3, 4, 6, 8]}>
				{games.map(({ name, background_image }, index) => (
					<Box>
						<Image
							src={background_image}
							w="200px"
							h="350px"
							objectFit="cover"
						/>
						<Text fontWeight="bold">{name}</Text>
					</Box>
				))}
			</SimpleGrid>
		</div>
	);
};

export default GameList;
