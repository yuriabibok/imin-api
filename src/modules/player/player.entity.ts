import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { Game } from '../game/game.entity';
import { GamePlayer } from '../gamePlayer/gamePlayer';
import { Team } from '../team/team.entity';
import { TeamPlayer } from '../teamPlayer/teamPlayer.entity';

@Table({ timestamps: false })
export class Player extends Model<Player> {

  @Column
  public firstName: string;

  @Column
  public lastName: string;

  @Column
  public age?: number;

  @Column
  public email: string

  @Column({ defaultValue: true })
  public enabled: boolean;

  @BelongsToMany(() => Team, () => TeamPlayer)
  public teams: Team[];

  @BelongsToMany(() => Game, () => GamePlayer)
  public games: Game[];
}
