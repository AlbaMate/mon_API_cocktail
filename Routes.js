import express from "express";
import connection from "./config/database.js"; // Chemin correct vers database.js

const router = express.Router();

// Route pour obtenir tous les cocktails
router.get("/", (req, res) => {
  connection.query("SELECT * FROM cocktails", (error, results) => {
    if (error) {
      console.error("Erreur lors de la récupération des cocktails: ", error);
      res.status(500).send("Erreur lors de la récupération des cocktails");
      return;
    }
    res.json(results);
  });
});

// Route pour obtenir un cocktail par ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  connection.query(
    "SELECT * FROM cocktails WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.error("Erreur lors de la récupération du cocktail: ", error);
        res.status(500).send("Erreur lors de la récupération du cocktail");
        return;
      }
      if (results.length === 0) {
        res.status(404).send("Cocktail non trouvé");
        return;
      }
      res.json(results[0]);
    }
  );
});

// Route pour ajouter un nouveau cocktail
router.post("/", (req, res) => {
  const { name, description, ingredients, preparation } = req.body;
  const sql =
    "INSERT INTO cocktails (name, description, ingredients, preparation) VALUES (?, ?, ?, ?)";
  connection.query(
    sql,
    [name, description, ingredients, preparation],
    (error, results) => {
      if (error) {
        console.error("Erreur lors de l'ajout du cocktail: ", error);
        res.status(500).send("Erreur lors de l'ajout du cocktail");
        return;
      }
      res.status(201).json({
        id: results.insertId,
        name,
        description,
        ingredients,
        preparation,
      });
    }
  );
});

// Route pour mettre à jour un cocktail
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, description, ingredients, preparation } = req.body;
  const sql =
    "UPDATE cocktails SET name = ?, description = ?, ingredients = ?, preparation = ? WHERE id = ?";
  connection.query(
    sql,
    [name, description, ingredients, preparation, id],
    (error, results) => {
      if (error) {
        console.error("Erreur lors de la mise à jour du cocktail: ", error);
        res.status(500).send("Erreur lors de la mise à jour du cocktail");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send("Cocktail non trouvé");
        return;
      }
      res.send("Cocktail mis à jour avec succès");
    }
  );
});

// Route pour supprimer un cocktail
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const sql = "DELETE FROM cocktails WHERE id = ?";
  connection.query(sql, [id], (error, results) => {
    if (error) {
      console.error("Erreur lors de la suppression du cocktail: ", error);
      res.status(500).send("Erreur lors de la suppression du cocktail");
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Cocktail non trouvé");
      return;
    }
    res.send("Cocktail supprimé avec succès");
  });
});

export default router;
