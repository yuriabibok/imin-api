import { Sequelize } from 'sequelize-typescript';

import config from 'src/config';

import models from './models';

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
      sequelize.addModels(models);
      await sequelize.sync();

      return sequelize;
    },
  },
];
