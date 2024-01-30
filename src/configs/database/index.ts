import 'dotenv/config';

export const databaseConfig = {
  databaseURL: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/postgres?schema=public`
};
