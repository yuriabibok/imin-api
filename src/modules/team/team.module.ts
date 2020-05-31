import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TeamService } from './team.service';
import { teamProviders } from './team.providers';
import { TeamController } from './team.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamController],
  providers: [
    TeamService,
    ...teamProviders,
  ],
})
export class TeamModule { }
