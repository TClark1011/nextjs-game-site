import Head from "next/head";

interface Props {
	api_token: string;
}

const Home: React.FC<Props> = ({ api_token, ...props }) => {
	localStorage.setItem("api_token", api_token);

	return (
		<div>
			<h1>Hello NextJS</h1>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const { access_token } = await fetch(
		`https://id.twitch.tv/oauth2/token?client_id=${process.env.API_CLIENT_ID}&client_secret=${process.env.API_CLIENT_SECRET}&grant_type=client_credentials`,
		{
			method: "POST",
			mode: "cors",
		}
	).then((r) => r.json());
	return { props: { api_token: access_token } };
};
