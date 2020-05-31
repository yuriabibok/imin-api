import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { playerProviders } from './player.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    PlayerService,
    ...playerProviders,
  ],
  exports: [...playerProviders],
})
export class PlayerModule { }
