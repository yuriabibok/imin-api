import { Player } from './player.entity';
import { PlayerInGameDTO } from './player.dto';

export const mapInGame = (player: Player, attendance: boolean): PlayerInGameDTO => {
  return {
    id: player.id,
    name: `${player.lastName} ${player.firstName}`,
    attendance,
  };
};
