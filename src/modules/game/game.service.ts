import { Injectable, Inject } from '@nestjs/common';
import { Game } from './game.entity';
import { getGlobalProp } from 'src/utils/globalStorage';
import { Player } from '../player/player.entity';
import { Op } from 'sequelize';
import { Team } from '../team/team.entity';

@Injectable()
export class GameService {
  public constructor(@Inject('GAME_REPOSITORY') private gameRepository: typeof Game,
    @Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player) { }

  public async getUpcomingGames(): Promise<Game[]> {
    const userId = getGlobalProp('userId');
    const player = await this.playerRepository.findOne({
      attributes: [],
      where: {
        id: userId,
        enabled: true,
      },
      include: [{
        model: Game,
        attributes: ['id', 'title', 'date'],
        through: {
          attributes: [],
        },
        where: {
          date: {
            [Op.gt]: new Date(),
          },
        },
        include: [{
          model: Player,
          attributes: ['id', 'firstName', 'lastName', 'age', 'email'],
          through: {
            attributes: [],
          },
        }, {
          model: Team,
        }],
      }],
    });

    return player.games;
  }

  public async get(id: string): Promise<Game> {
    const game = await this.gameRepository.findOne({
      attributes: ['id', 'title', 'date'],
      where: {
        id,
      },
      include: [{
        model: Player,
        attributes: ['id', 'firstName', 'lastName', 'age', 'email'],
        through: {
          attributes: ['attendance', 'bestPlayer'],
        },
      }, {
        model: Team,
      }],
    });

    return game;
  }
}
