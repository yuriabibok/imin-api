import { Injectable, Inject } from '@nestjs/common';
import { Game } from './game.entity';
import { getGlobalProp } from 'src/utils/globalStorage';
import { Player } from '../player/player.entity';
import { Op } from 'sequelize';
import { Team } from '../team/team.entity';
import { map, mapDetails } from './game.mapper';
import { GameDTO, GameDetailsDTO } from './game.dto';

@Injectable()
export class GameService {
  public constructor(@Inject('GAME_REPOSITORY') private gameRepository: typeof Game,
    @Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player) { }

  public async getUpcomingGames(): Promise<GameDTO[]> {
    const userId = getGlobalProp('userId');
    const player = await this.playerRepository.findOne({
      attributes: [],
      where: {
        id: userId,
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
          attributes: ['id', 'firstName', 'lastName'],
          through: {
            attributes: [],
          },
        }, {
          model: Team,
        }],
      }],
    });

    return player.games.map(map);
  }

  public async get(id: string): Promise<GameDetailsDTO> {
    const game = await this.gameRepository.findOne({
      attributes: ['id', 'title', 'date'],
      where: {
        id,
      },
      include: [{
        model: Player,
        attributes: ['id', 'firstName', 'lastName'],
        through: {
          attributes: ['bestPlayer'],
        },
      }, {
        model: Team,
        include: [{
          model: Player,
          attributes: ['id', 'firstName', 'lastName'],
          through: {
            attributes: [],
          },
        }],
      }],
    });

    return mapDetails(game);
  }
}
