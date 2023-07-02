export interface SteamUserApiResponse {
	response: {
		game_count: number;
		games: MinimalGameInfo[];
	};
}

export interface MinimalGameInfo {
	appid: number;
	name: string;
	playtime_forever: number;
	rtime_last_played: number;
}
