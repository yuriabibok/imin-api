import { Player } from './player.entity';
import { PlayerInGameDTO, PlayerDTO } from './player.dto';

export const mapInGame = (player: Player, attendance: boolean): PlayerInGameDTO => {
  return {
    id: player.id,
    name: `${player.lastName} ${player.firstName}`,
    attendance,
  };
};

export const map = (player: Player): PlayerDTO => {
  return {
    id: player.id,
    name: `${player.lastName} ${player.firstName}`,
  };
};
