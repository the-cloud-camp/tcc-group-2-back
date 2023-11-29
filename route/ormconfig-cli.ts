import 'dotenv/config';
import { DataSource } from 'typeorm';

import options from './ormconfig';

const datasource = new DataSource(options);

export default datasource;
