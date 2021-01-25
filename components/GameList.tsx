import {
	Box,
	Center,
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
				<Box paddingBottom={1} padding={0}>
					<Box backgroundColor="white" boxShadow="md" borderRadius="sm">
						<LinkBox
							w="100%"
							h="350px"
							href={`/games/${id}`}
							transitionDuration="0.1s"
						>
							<Image
								key={id}
								src={background_image}
								w="100%"
								h="100%"
								objectFit="cover"
							/>
						</LinkBox>
						<Center height="3rem">
							<Link
								fontWeight="bold"
								href={`/games/${id}`}
								bottom="0"
								paddingX={1}
								display="block"
								textAlign="center"
							>
								{name}
							</Link>
						</Center>
					</Box>
				</Box>
			))}
		</SimpleGrid>
	);
};

export default GameList;
