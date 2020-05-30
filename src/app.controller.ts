import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Player } from './modules/player/player.entity';

@Controller()
export class AppController {
  constructor(private appService: AppService) { }

  @Get()
  async getHello(): Promise<Player[]> {
    return await this.appService.getHello();
  }
}
