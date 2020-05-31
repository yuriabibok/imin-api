import { Table, Column, Model, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Game } from '../game/game.entity';
import { Player } from '../player/player.entity';
import { TeamPlayer } from '../teamPlayer/teamPlayer.entity';

@Table({ timestamps: false })
export class Team extends Model<Team> {

  @Column
  public name: string;

  @Column
  public capacity: number;

  @HasMany(() => Game)
  public games: Game[];

  @BelongsToMany(() => Player, () => TeamPlayer)
  public players: Player[];
}
