import { getOwnedGames } from '../utils/steam-api-service';

export const load = async () => {
	const gamesData = await getOwnedGames('nothing');
	return { games: gamesData };
};
