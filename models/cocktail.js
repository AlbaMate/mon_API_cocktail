// models/cocktail.mjs
import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js'; 
//import Cocktails from './models/cocktails.js';



const Cocktail = sequelize.define('Cocktail', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ingredients: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() { //Le tableau d'ingrédients sera converti en JSON avant d'être stocké dans la base de données.
      // Convertir la chaîne JSON en tableau
      const rawData = this.getDataValue('ingredients');
      return rawData ? JSON.parse(rawData) : []; //Lors de la récupération depuis la base de données, le champ ingredients sera automatiquement converti en tableau à nouveau grâce à la méthode get() que nous avons définie dans le modèle.
    },
    set(value) {
      // Convertir le tableau en chaîne JSON
      this.setDataValue('ingredients', JSON.stringify(value));
    }
  
  },
  preparation: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isAlcoholic: {
    type: DataTypes.BOOLEAN,  // Ajout de la colonne isAlcoholic dans le modèle
    allowNull: false,
    defaultValue: true,
},
});

export default Cocktail;
