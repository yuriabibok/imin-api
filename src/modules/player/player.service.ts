import { Injectable, Inject } from '@nestjs/common';
// import { CreatePlayerDTO } from './dto/create-player.dto';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player) {}

  async findAll(): Promise<Player[]> {
    return this.playerRepository.findAll<Player>();
  }
}
