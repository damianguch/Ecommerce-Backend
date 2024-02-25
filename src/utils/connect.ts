import mongoose from 'mongoose';
import config from 'config';
import log from './logger';

export async function connect() {
  const dbUrl = config.get<string>('dbUrl');

  try {
    await mongoose.connect(dbUrl);
    log.info('Connected to database!');
  } catch (error) {
    log.error(error);
    process.exit(1);
  }
}
