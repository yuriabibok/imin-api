import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { Game } from '../game/game.entity';
import { GamePlayer } from '../gamePlayer/gamePlayer';
import { Team } from '../team/team.entity';
import { TeamPlayer } from '../teamPlayer/teamPlayer.entity';

@Table({ timestamps: false })
export class Player extends Model<Player> {

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  age?: number;

  @Column
  email: string

  @Column({ defaultValue: true })
  enabled: boolean;

  @BelongsToMany(() => Team, () => TeamPlayer)
  teams: Team[];

  @BelongsToMany(() => Game, () => GamePlayer)
  games: Game[];
}
