import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Game } from '../game/game.entity';
import { Player } from '../player/player.entity';

@Table({ timestamps: false })
export class GamePlayer extends Model<GamePlayer> {
  
  @Column({ defaultValue: false })
  public attendance: boolean;

  @Column({ defaultValue: 0 })
  public investment: number;

  @Column({ defaultValue: 0 })
  public payment: number;

  @Column({ defaultValue: false })
  public bestPlayer: boolean;

  @ForeignKey(() => Game)
  @Column
  public gameId: number;
 
  @ForeignKey(() => Player)
  @Column
  public playerId: number;
}
