import { Injectable, Inject } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  public constructor(
    @Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player) { }

  public async findAll(): Promise<Player[]> {
    return this.playerRepository.findAll<Player>();
  }
}
