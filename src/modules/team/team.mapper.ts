import { Team } from './team.entity';
import { TeamDTO, TeamDetailsDTO } from './team.dto';
import { mapGameInTeam as mapGame } from '../game/game.mapper';
import { map as mapPlayer } from '../player/player.mapper';

export const map = (team: Team): TeamDTO => {
  return {
    id: team.id,
    name: team.name,
    capacity: team.capacity,
  };
};

export const mapDetails = (team: Team): TeamDetailsDTO => {
  return {
    id: team.id,
    name: team.name,
    capacity: team.capacity,
    games: team.games.map(mapGame),
    players: team.players.map(mapPlayer),
  };
};
