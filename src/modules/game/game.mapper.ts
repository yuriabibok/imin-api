import { Game } from './game.entity';
import { GameDTO, GameDetailsDTO } from './game.dto';
import { map as mapTeam } from '../team/team.mapper';
import { mapInGame } from '../player/player.mapper';

export const map = (game: Game): GameDTO => {
  return {
    id: game.id,
    title: game.title,
    date: game.date,
    team: mapTeam(game.team),
    playersInGameCount: game.players.length,
  };
};

export const mapDetails = (game: Game): GameDetailsDTO => {
  const teamPlayers = game.team.players
    .map(teamPlayer => mapInGame(teamPlayer, game.players.some(player => teamPlayer.id === player.id)))
    .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

  return {
    id: game.id,
    title: game.title,
    date: game.date,
    team: mapTeam(game.team),
    playersInGameCount: game.players.length,
    teamPlayers,
  };
};
