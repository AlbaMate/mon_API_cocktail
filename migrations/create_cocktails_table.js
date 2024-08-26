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
