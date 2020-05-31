import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PlayerModule } from '../player/player.module';
import { GameService } from './game.service';
import { gameProviders } from './game.providers';
import { GameController } from './game.controller';

@Module({
  imports: [DatabaseModule, PlayerModule],
  controllers: [GameController],
  providers: [
    GameService,
    ...gameProviders,
  ],
})
export class GameModule { }
