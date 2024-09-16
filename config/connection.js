// config/connection.mjs
import { Sequelize } from "sequelize";

// Crée une instance de Sequelize avec les informations de connexion
const sequelize = new Sequelize("database-cocktail", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Teste la connexion
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
