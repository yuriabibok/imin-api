import { Injectable, Inject } from '@nestjs/common';
import { Team } from './team.entity';
import { getGlobalProp } from 'src/utils/globalStorage';
import { Player } from '../player/player.entity';
import { Game } from '../game/game.entity';
// import { Player } from '../player/player.entity';
// import { Op } from 'sequelize';

@Injectable()
export class TeamService {
  public constructor(@Inject('TEAM_REPOSITORY') private teamRepository: typeof Team) { }

  public async getAll(): Promise<Team[]> {
    const userId = getGlobalProp('userId');
    const teams = await this.teamRepository.findAll({
      include: [{
        model: Player,
        attributes: [],
        where: {
          id: userId,
        },
      }],
    });

    return teams;
  }

  public async get(id: string): Promise<Team> {
    const team = await this.teamRepository.findOne({
      where: {
        id,
      },
      include: [{
        model: Player,
        through: {
          attributes: [],
        },
      }, {
        model: Game,
        attributes: ['id', 'title', 'date'],
      }],
    });

    return team;
  }
}
