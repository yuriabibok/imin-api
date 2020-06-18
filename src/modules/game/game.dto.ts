import { TeamDTO } from '../team/team.dto';
import { PlayerInGameDTO } from '../player/player.dto';

export interface GameDTO {
  id: string;
  title: string;
  date: Date;
  playersInGameCount: number;
  team: TeamDTO;
}

export interface GameInTeamDTO {
  id: string;
  title: string;
  date: Date;
}

export interface GameDetailsDTO extends GameDTO {
  teamPlayers: PlayerInGameDTO[];
}
