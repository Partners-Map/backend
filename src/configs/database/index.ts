import 'dotenv/config';

export const databaseConfig = {
  databaseURL: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.PROJECT_STATUS === 'production' ? process.env.DB_HOST : 'localhost'}:${process.env.DB_PORT}/${process.env.DB_NAME}?schema=public`
};
