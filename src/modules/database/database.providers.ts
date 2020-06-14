import { Sequelize } from 'sequelize-typescript';
import { Player } from '../player/player.entity';
import { Team } from '../team/team.entity';
import { Game } from '../game/game.entity';
import { TeamPlayer } from '../teamPlayer/teamPlayer.entity';
import { GamePlayer } from '../gamePlayer/gamePlayer';
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
      const models = [Player, Team, Game, TeamPlayer, GamePlayer];
      sequelize.addModels(models);
      await sequelize.sync();

      return sequelize;
    },
  },
];
