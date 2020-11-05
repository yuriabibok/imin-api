const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const envPath = path.resolve(__dirname, '../../src/config/.env');
dotenv.config({ path: envPath });

module.exports = {
  development: {
    dialect: 'mysql',
    logging: false,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
};

