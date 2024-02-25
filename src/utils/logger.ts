import logger from 'pino';
import dayjs from 'dayjs';

import pretty from 'pino-pretty';
const log = logger(pretty());

export default log;
