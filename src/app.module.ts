import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './modules/player/player.module';
import { GameModule } from './modules/game/game.module';
import { TeamModule } from './modules/team/team.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [PlayerModule, GameModule, TeamModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
