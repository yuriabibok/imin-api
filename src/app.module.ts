import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './modules/player/player.module';
import { GameModule } from './modules/game/game.module';

@Module({
  imports: [PlayerModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
