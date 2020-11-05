import * as dotenv from 'dotenv';
import path = require('path');

dotenv.config();
const envPath = path.resolve(__dirname, '../../../src/config/.env');
dotenv.config({ path: envPath });

export default {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
};
