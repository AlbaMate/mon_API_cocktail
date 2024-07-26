// vamos importar express a partir de ese modulo que instalamos pero necesitamos instalar en el paquete json un script con un valor modulo para que me deje usar el import
import express from "express";

//este modulo va apermitirme trabajar con fs los archivos que estan en el folder del projet
import fs from "fs"; //nos ayuda à stocker et gérer les données sur notre syst d explot

import bodyParser from "body-parser"; // mon middelware

// con esto crteo el objeto de mafunction
const app = express();
app.use(bodyParser.json()); //voy agregar mon middelware usando el objeto de l'app .use y le pasamos adentro ese (body parse)
//para leeer los datos

const readData = () => {
  try {
    const data = fs.readFileSync("./db.json");
    //console.log(data);
    //console.log(JSON.parse(data));
    return JSON.parse(data);
  } catch (erreur) {
    console.log(erreur);
  }
};

const writeData = (data) => {
  try {
    // del modulo fs importado uss el writeFileSync, les paso mis datos en un formato que es un obj de js y lo debo tranasformar y utiliso la function(stringify)
    const data = fs.writeFileSync("./db.json", JSON.stringify(data, null)); //stringify est une méthode de JavaScript qui convertit un objet JavaScript en une chaîne JSON.
    //return JSON.parse(data);
  } catch (erreur) {
    console.log(erreur);
  }
};

app.get("/", (req, res) => {
  res.send("don't forget to smile");
});

//creo una ruta cocktail que recibira la pregunta en question et la resp
app.get("/cocktails", (req, res) => {
  const data = readData();
  res.json(data.cocktails);
});

app.get("/cocktails/:id", (req, res) => {
  const data = readData();
  //creo mi const para extraer l'id
  const id = parseInt(req.params.id);
  const drink = data.cocktails.find((drink) => drink.id === id);
  res.json(drink);
});

app.post("/cocktails", (req, res) => {
  const data = readData();
  const body = req.body; // voy extraer el body que ya viene en mi objeto y aqui es donde enviaré los datos de un cocktail que voy a crear new
  const newDrink = {
    //un objeto
    // mon id yo lo voy a crear automaticamente que deberia ser igual a la longitud que tiene ese array de cocktails + 1
    id: data.cocktails.lenght + 1,
    ...body, // voy a utilisar le spread operator para todo lo que hay en body lo agrege aqui mismo
  };
  data.cocktails.push(newDrink); // a mis cocktails le agrego ese new cocktail
  writeData(data); // paso mis datos con todos los libros y el nuevo libro
  res.json(newDrink); // y respondo con un JSON que es libro que acabo de crear
});

app.put("/cocktails/:id", (req, res) => {
  const data = readData();
  const body = req.body;
  const id = parseInt(req.params.id);
  const DrinkIndex = data.cocktails.findIndex((Drink) => Drink.id === id); //quiero saber el index del cocktail que estoy buscando

  data.cocktails[DrinkIndex] = {
    ...data.cocktails[DrinkIndex], // donde tengo los libros en esa posicion mon index, todos losd atos que tengo aqui los voy a actualisar con los datos del body que estan entrando
    ...body, // le trois point  permet de copier, concaténer ou insérer les éléments d'un tableau dans un autre tableau,manipuler les éléments de tableaux et les propriétés d'objets,
  };
  writeData(data); //utiliso esta funcion y le paso les nuevos datos que tengo
  res.json({ message: "Drink update successfully" });
});

app.delete("/cocktails");
readData();

app.listen(6500, () => {
  console.log("server actif on port 6500");
});

//routes.js
// import express from "express";
// import connection from "./config/database.js"; // Chemin correct vers database.js

// const router = express.Router();

// // Route pour obtenir tous les cocktails
// router.get("/", (req, res) => {
//   connection.query("SELECT * FROM cocktails", (error, results) => {
//     if (error) {
//       console.error("Erreur lors de la récupération des cocktails: ", error);
//       res.status(500).send("Erreur lors de la récupération des cocktails");
//       return;
//     }
//     res.json(results);
//   });
// });

// // Route pour obtenir un cocktail par ID
// router.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   connection.query(
//     "SELECT * FROM cocktails WHERE id = ?",
//     [id],
//     (error, results) => {
//       if (error) {
//         console.error("Erreur lors de la récupération du cocktail: ", error);
//         res.status(500).send("Erreur lors de la récupération du cocktail");
//         return;
//       }
//       if (results.length === 0) {
//         res.status(404).send("Cocktail non trouvé");
//         return;
//       }
//       res.json(results[0]);
//     }
//   );
// });

// // Route pour ajouter un nouveau cocktail
// router.post("/", (req, res) => {
//   const { name, description, ingredients, preparation } = req.body;
//   const sql =
//     "INSERT INTO cocktails (name, description, ingredients, preparation) VALUES (?, ?, ?, ?)";
//   connection.query(
//     sql,
//     [name, description, ingredients, preparation],
//     (error, results) => {
//       if (error) {
//         console.error("Erreur lors de l'ajout du cocktail: ", error);
//         res.status(500).send("Erreur lors de l'ajout du cocktail");
//         return;
//       }
//       res.status(201).json({
//         id: results.insertId,
//         name,
//         description,
//         ingredients,
//         preparation,
//       });
//     }
//   );
// });

// // Route pour mettre à jour un cocktail
// router.put("/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const { name, description, ingredients, preparation } = req.body;
//   const sql =
//     "UPDATE cocktails SET name = ?, description = ?, ingredients = ?, preparation = ? WHERE id = ?";
//   connection.query(
//     sql,
//     [name, description, ingredients, preparation, id],
//     (error, results) => {
//       if (error) {
//         console.error("Erreur lors de la mise à jour du cocktail: ", error);
//         res.status(500).send("Erreur lors de la mise à jour du cocktail");
//         return;
//       }
//       if (results.affectedRows === 0) {
//         res.status(404).send("Cocktail non trouvé");
//         return;
//       }
//       res.send("Cocktail mis à jour avec succès");
//     }
//   );
// });

// // Route pour supprimer un cocktail
// router.delete("/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const sql = "DELETE FROM cocktails WHERE id = ?";
//   connection.query(sql, [id], (error, results) => {
//     if (error) {
//       console.error("Erreur lors de la suppression du cocktail: ", error);
//       res.status(500).send("Erreur lors de la suppression du cocktail");
//       return;
//     }
//     if (results.affectedRows === 0) {
//       res.status(404).send("Cocktail non trouvé");
//       return;
//     }
//     res.send("Cocktail supprimé avec succès");
//   });
// });

// export default router;

//index.js
import express from "express";
import bodyParser from "body-parser";
import connection from "./config/database.js"; // Chemin correct vers database.js
import cocktailRoutes from "./routes.js"; // Chemin correct vers routes.js

const app = express();
app.use(bodyParser.json()); // Middleware pour analyser les données JSON

// Utiliser les routes définies dans routes.js
app.use("/cocktails", cocktailRoutes);

app.get("/", (req, res) => {
  res.send("Hello from /");
});

app.listen(6500, () => {
  console.log("Server actif sur le port 6500");
});
