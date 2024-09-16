// sync.mjs
import sequelize from './config/connection.js';
import Cocktail from './models/cocktail.js';

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Utilise force: true pour recréer la table
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
}

syncDatabase();
