import { Table, Column, Model, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Player } from '../player/player.entity';
import { GamePlayer } from '../gamePlayer/gamePlayer';
import { Team } from '../team/team.entity';

@Table({ timestamps: false })
export class Game extends Model<Game> {

  @Column
  public title: string;

  @Column
  public date: Date;

  @ForeignKey(() => Team)
  @Column
  public teamId: number;
 
  @BelongsTo(() => Team)
  public team: Team;
  
  @BelongsToMany(() => Player, () => GamePlayer)
  public players: Player[];
}
