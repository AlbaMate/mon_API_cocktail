import express from "express";
import { Op } from "sequelize";
import Cocktail from "./models/cocktail.js"; // Modèle Sequelize

const router = express.Router();

// Route de recherche
router.get("/", async (req, res) => {
  const { q, ingredient, alcoholic } = req.query;

  let whereClause = {};

  if (q) {
    whereClause[Op.or] = [
      { name: { [Op.like]: `%${q}%` } },
      { description: { [Op.like]: `%${q}%` } },
    ];
  }

  if (ingredient) {
    whereClause.ingredients = {
      [Op.like]: `%${ingredient}%`,
    };
  }

  if (alcoholic !== undefined) {
    whereClause.isAlcoholic = alcoholic === "true";
  }
  // // Vérification du nombre de cocktails trouvés
  // if (cocktails.length === 0) {
  //   return res.status(404).json({ message: "Aucun cocktail trouvé" });
  // }

  try {
    const cocktails = await Cocktail.findAll({
      where: whereClause,
    });
    res.json(cocktails);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur");
  }
});

export default router;
