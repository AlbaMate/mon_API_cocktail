const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "ton_utilisateur",
  password: "ton_mot_de_passe",
  database: "nom_de_ta_base_de_donnees",
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion : " + err.stack);
    return;
  }
  console.log("Connecté en tant que " + connection.threadId);

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS cocktails (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom letCHAR(255) NOT NULL,
      ingredients TEXT NOT NULL,
      instructions TEXT NOT NULL
    )
  `;

  connection.query(createTableQuery, (err, results) => {
    if (err) throw err;
    console.log("Table créée ou déjà existante.");
    connection.end();
  });
});



// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('cocktails', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       description: {
//         type: Sequelize.TEXT
//       },
//       ingredients: {
//         type: Sequelize.TEXT
//       },
//       preparation: {
//         type: Sequelize.TEXT
//       },
//       image: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.fn('now')
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.fn('now')
//       }
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('cocktails');
//   }
// };
