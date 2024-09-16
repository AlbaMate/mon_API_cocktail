import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import config from './config/config.js'; // Assure-toi que le chemin d'accès est correct

const env = process.env.NODE_ENV || 'development';
const configEnv = config[env];

const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
  host: configEnv.host,
  dialect: configEnv.dialect,
});

const umzug = new Umzug({
  migrations: {
    glob: 'migrations/*.mjs',
    // Assure-toi que les fichiers de migration sont en mjs si tu utilises ES Modules
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

async function runMigrations() {
  await umzug.up();
  console.log('Migrations successfully run.');
}

runMigrations().catch(err => {
  console.error('Error running migrations:', err);
});
