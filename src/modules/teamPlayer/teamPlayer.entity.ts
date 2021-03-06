import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Player } from '../player/player.entity';
import { Team } from '../team/team.entity';

@Table({ timestamps: false })
export class TeamPlayer extends Model<TeamPlayer> {
  
  @Column({ defaultValue: 0 })
  public balance: number;

  @ForeignKey(() => Team)
  @Column
  public teamId: number;
 
  @ForeignKey(() => Player)
  @Column
  public playerId: number;
}
