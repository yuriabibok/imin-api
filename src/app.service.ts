import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user';

@Injectable()
export class AppService {
  async getHello(): Promise<void> {

    const sequelize = new Sequelize({
      database: 'imin',
      dialect: 'mysql',
      username: 'root',
      password: 'M0tivati0n',
      host: 'localhost',
      port: 3300,
    });

    sequelize.addModels([User])

    // sequelize.sync().then(result => {
    //   console.log(result);
    // })
    //   .catch(err => console.log(err));


    // const playerRepository = sequelize.getRepository(User);
    // const player = await playerRepository.findOne({ where: { name: 'Yuri' } });
    // return player;
  }
}
