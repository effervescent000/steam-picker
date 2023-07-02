import type { SteamUserApiResponse } from '../interfaces/api-responses';

import { MY_STEAM_ID, STEAM_API_KEY } from '$env/static/private';
import { APIError } from './exceptions';

const STEAM_USER_API = 'http://api.steampowered.com/IPlayerService/';
const STEAM_GAME_API = 'http://store.steampowered.com/';

const GET = async <T>(url: string): Promise<T> => {
	try {
		const result = await fetch(url);
		return result.json();
	} catch (error) {
		throw APIError;
	}
};

export const getOwnedGames = async (_userString: string) => {
	// in the future we will parse the input in some way but for now
	// we are just hard-coding it to my url
	const userId = MY_STEAM_ID;
	const joinedUrl = `${STEAM_USER_API}/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userId}&include_appinfo=true`;
	const result = await GET<SteamUserApiResponse>(joinedUrl);
	return result.response.games;
};
