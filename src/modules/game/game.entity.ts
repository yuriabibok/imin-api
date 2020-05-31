import { Table, Column, Model, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Player } from '../player/player.entity';
import { GamePlayer } from '../gamePlayer/gamePlayer';
import { Team } from '../team/team.entity';

@Table({ timestamps: false })
export class Game extends Model<Game> {

  @Column
  title: string;

  @Column
  date: Date;

  @ForeignKey(() => Team)
  @Column
  teamId: number;
 
  @BelongsTo(() => Team)
  team: Team;
  
  @BelongsToMany(() => Player, () => GamePlayer)
  players: Player[];
}
