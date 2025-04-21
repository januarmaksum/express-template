import dotenv from 'dotenv';
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

export default {
  PORT: Number(process.env.PORT) || 3000,
  DATABASE_URL: isProduction ? process.env.PROD_DATABASE_URL : process.env.DEV_DATABASE_URL,
  API_URL: process.env.API_URL,
  NODE_ENV: process.env.NODE_ENV,
};
