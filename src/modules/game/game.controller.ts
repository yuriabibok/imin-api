import { Controller, Get, Headers } from '@nestjs/common';
import { Game } from './game.entity';
import { GameService } from './game.service';
import { setGlobalProp } from 'src/utils/globalStorage';

@Controller({ path: 'games' })
export class GameController {
  public constructor(private gameService: GameService) { }

  @Get('upcoming')
  public async getUpcomingGames(@Headers() headers): Promise<Game[]> {
    setGlobalProp('userId', headers['userId'] || 1);

    return await this.gameService.getUpcomingGames();
  }
}
