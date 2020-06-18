import { GameInTeamDTO } from '../game/game.dto';
import { PlayerDTO } from '../player/player.dto';

export interface TeamDTO {
  id: string;
  name: string;
  capacity: number;
}

export interface TeamDetailsDTO extends TeamDTO {
  games: GameInTeamDTO[];
  players: PlayerDTO[];
}
