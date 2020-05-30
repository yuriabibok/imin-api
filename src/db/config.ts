import { Sequelize } from 'sequelize-typescript';
import { Person } from './models/Person';

const sequelize = new Sequelize({
  database: 'imin',
  dialect: 'mysql',
  username: 'root',
  password: 'M0tivati0n',
  host: 'localhost',
  port: 3300,
  // storage: ':memory:',
  models: [Person],
  repositoryMode: true,
});

export default sequelize;
