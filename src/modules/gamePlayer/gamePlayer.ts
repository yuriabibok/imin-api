import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Game } from '../game/game.entity';
import { Player } from '../player/player.entity';

@Table({ timestamps: false })
export class GamePlayer extends Model<GamePlayer> {
  
  @Column({ defaultValue: false })
  attendance: boolean;

  @Column({ defaultValue: 0 })
  investment: number;

  @Column({ defaultValue: 0 })
  payment: number;

  @Column({ defaultValue: false })
  bestPlayer: boolean;

  @ForeignKey(() => Game)
  @Column
  gameId: number;
 
  @ForeignKey(() => Player)
  @Column
  playerId: number;
}
