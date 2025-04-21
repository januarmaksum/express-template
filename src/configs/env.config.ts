import dotenv from 'dotenv';
dotenv.config();

const production = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.PROD_DATABASE_URL,
  API_URL: process.env.API_URL,
  NODE_ENV: process.env.NODE_ENV,
};

const development = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DEV_DATABASE_URL,
  API_URL: process.env.API_URL,
  NODE_ENV: process.env.NODE_ENV,
};

const env = process.env.NODE_ENV === 'production' ? production : development;

export default env;
