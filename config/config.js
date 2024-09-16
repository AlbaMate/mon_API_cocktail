

export default {
    development: {
      username: 'root',
      password: null,
      database: 'database-cocktail',
      host: '127.0.0.1',
      dialect: 'mysql',
      seederStorage: 'json',
      seederStoragePath: 'seeders.json'
    },
    test: {
      username: 'root',
      password: null,
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: 'root',
      password: null,
      database: 'database_production',
      host: '127.0.0.1',
      dialect: 'mysql'
    }
  };
  