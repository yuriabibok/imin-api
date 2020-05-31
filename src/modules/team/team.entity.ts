import { Table, Column, Model, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Game } from '../game/game.entity';
import { Player } from '../player/player.entity';
import { TeamPlayer } from '../teamPlayer/teamPlayer.entity';

@Table({ timestamps: false })
export class Team extends Model<Team> {

  @Column
  name: string;

  @HasMany(() => Game)
  games: Game[];

  @BelongsToMany(() => Player, () => TeamPlayer)
  players: Player[];
}
