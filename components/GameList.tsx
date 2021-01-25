import IGame from "../types/IGame";

interface Props {
	games: IGame[];
}

const GameList: React.FC<Props> = ({ games, ...props }) => {
	return (
		<div {...props}>
			<ul>
				{games.map(({ name, background_image }, index) => (
					<li>
						<img src={background_image} />
						<b>{name}</b>
					</li>
				))}
			</ul>
		</div>
	);
};

export default GameList;
