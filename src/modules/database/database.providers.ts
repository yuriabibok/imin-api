import { Sequelize } from 'sequelize-typescript';
import { Player } from '../player/player.entity';
import config from 'config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (): Promise<Sequelize> => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: config.db.host,
        port: parseInt(config.db.port),
        username: config.db.user,
        password: config.db.pass,
        database: config.db.database,
      });
      sequelize.addModels([Player]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
