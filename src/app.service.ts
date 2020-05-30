import { Injectable } from '@nestjs/common';
import { Player } from './modules/player/player.entity';
import { PlayerService } from './modules/player/player.service';

@Injectable()
export class AppService {
  constructor(private playerService: PlayerService) { }

  async getHello(): Promise<Player[]> {
    const players = await this.playerService.findAll();

    return players;
  }
}
