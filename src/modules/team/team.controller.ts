import { Controller, Get, Headers, Param } from '@nestjs/common';
import { Team } from './team.entity';
import { TeamService } from './team.service';
import { setGlobalProp } from 'src/utils/globalStorage';

@Controller({ path: 'teams' })
export class TeamController {
  public constructor(private teamService: TeamService) { }

  @Get()
  public async getAll(@Headers() headers): Promise<Team[]> {
    setGlobalProp('userId', headers['userId'] || 1);

    return await this.teamService.getAll();
  }

  @Get('/:id')
  public async get(@Param() params): Promise<Team> {
    return await this.teamService.get(params.id);
  }
}
