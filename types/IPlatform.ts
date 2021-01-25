interface IPlatform {
	id: number;
	name: string;
	slug: string;
	image?: string | null;
	year_end?: string | null;
	games_count: number;
	image_background: string;
}

export interface IPlatformListItem {
	platform: IPlatform;
	released_at: string;
	requirements: {
		minimum?: string;
		recommended?: string;
	};
}

export default IPlatform;
