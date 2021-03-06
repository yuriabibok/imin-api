import { Injectable, Inject } from '@nestjs/common';
import { Team } from './team.entity';
import { getGlobalProp } from 'src/utils/globalStorage';
import { Player } from '../player/player.entity';
import { Game } from '../game/game.entity';
import { TeamDTO } from './team.dto';
import { mapDetails } from './team.mapper';

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

  public async get(id: string): Promise<TeamDTO> {
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

    return mapDetails(team);
  }
}
