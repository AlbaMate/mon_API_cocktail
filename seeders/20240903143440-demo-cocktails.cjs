"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cocktails",
      [
        {
          id: 1,
          name: "Mojito",
          description: "Un cocktail rafraîchissant à base de rhum, de menthe, de citron vert, de sucre et d'eau gazeuse.",
          ingredients: JSON.stringify([
            '50 ml de rhum blanc',
            '1 citron vert',
            '2 cuillères à café de sucre',
            '6 feuilles de menthe',
            'Eau gazeuse',
            'Glace pilée'
          ]),
          preparation: "Écrasez délicatement les feuilles de menthe avec le sucre et le jus du citron vert dans un verre. Ajoutez le rhum blanc, remplissez le verre de glace pilée, complétez avec de l'eau gazeuse et remuez doucement. Décorez avec une branche de menthe.",
          image: "https://pierrotgourmet.fr/wp-content/uploads/2013/03/recette_du_mojito2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Daiquiri",
          description: "Un cocktail classique à base de rhum, de jus de citron vert et de sucre.",
          ingredients: JSON.stringify([
            "60 ml de rhum blanc",
            "30 ml de jus de citron vert frais",
            "15 ml de sirop de sucre"
          ]),
          preparation: "Secouez tous les ingrédients avec de la glace dans un shaker. Filtrez dans un verre à cocktail refroidi.",
          image: "https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/80342_origin-scaled.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Cuba Libre",
          description: "Un cocktail simple et populaire à base de rhum et de cola avec un soupçon de citron vert.",
          ingredients: JSON.stringify([
            "50 ml de rhum blanc",
            "120 ml de cola",
            "1 quartier de citron vert",
            "Glace"
          ]),
          preparation: "Remplissez un verre de glaçons. Ajoutez le rhum et pressez un quartier de citron vert dans le verre. Complétez avec du cola et remuez doucement.",
          image: "https://cdn7.kiwilimon.com/recetaimagen/40577/54168.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Piña Colada",
          description: "Un cocktail tropical crémeux à base de rhum, de jus d'ananas et de crème de coco.",
          ingredients: JSON.stringify([
            "60 ml de rhum blanc",
            "90 ml de jus d'ananas",
            "30 ml de crème de coco",
            "Glace"
          ]),
          preparation: "Mixez tous les ingrédients avec de la glace dans un blender jusqu'à obtenir une consistance lisse. Servez dans un grand verre et décorez avec une tranche d'ananas et une cerise.",
          image: "https://www.foodfaithfitness.com/wp-content/uploads/2023/07/Pina-Colada-Recipe-Feature_1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Hemingway Special",
          description: "Un cocktail créé pour Ernest Hemingway, à base de rhum, de jus de pamplemousse et de marasquin.",
          ingredients: JSON.stringify([
            "60 ml de rhum blanc",
            "15 ml de marasquin",
            "40 ml de jus de pamplemousse",
            "15 ml de jus de citron vert"
          ]),
          preparation: "Secouez tous les ingrédients avec de la glace dans un shaker. Filtrez dans un verre à cocktail refroidi.",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Hemingway_Daiquiri.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "El Presidente",
          description: "Un cocktail élégant à base de rhum, de vermouth, de curaçao et de grenadine.",
          ingredients: JSON.stringify([
            "45 ml de rhum blanc",
            "25 ml de vermouth sec",
            "15 ml de curaçao orange",
            "1 cuillère à café de grenadine"
          ]),
          preparation: "Remuez tous les ingrédients avec de la glace dans un verre à mélange. Filtrez dans un verre à cocktail refroidi et décorez avec un zeste d'orange.",
          image: "https://www.cocktail-book.de/wp-content/uploads/2016/11/El-Presidente2-1161x1300.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cocktails", null, {});
  },
};
