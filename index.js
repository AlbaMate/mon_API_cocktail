// vamos importar express a partir de ese modulo que instalamos pero necesitamos instalar en el paquete json un script con un valor modulo para que me deje usar el import
import express from "express";
import cors from "cors";

//este modulo va apermitirme trabajar con fs los archivos que estan en el folder del projet
import fs from "fs"; //nos ayuda à stocker et gérer les données sur notre syst d explot

import bodyParser from "body-parser"; // mon middelware
// import { Op } from "sequelize";
// import Cocktails from "./models/cocktail"; // Modèle Sequelize
//  // Modèle Sequelize

//const cors = require("cors"); // Importer le middleware CORS
//import Cocktails from './models/cocktails.js';
import searchRoutes from "./searchRoutes.js"; // Import de la nouvelle route
//const searchRoutes = require('./searchRoutes.cjs');


// con esto creo el objeto de ma function
const app = express();
app.use(cors()); // Utiliser le middleware CORS
app.use("/search", searchRoutes); // Monte la route de recherche
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
    ...data.cocktails[DrinkIndex], // donde tengo los cocktails en esa posicion mon index, todos los datos que tengo aqui los voy a actualisar con los datos del body que estan entrando
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
