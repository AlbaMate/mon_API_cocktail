'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
      await queryInterface.bulkInsert (
        "Cocktails",
        [
          {
            id: 7,
          name: "Virgin Mojito",
          description: "Une version sans alcool du célèbre Mojito, rafraîchissante et délicieuse, parfaite pour les journées chaudes.",
          ingredients: JSON.stringify([
            "1 citron vert, coupé en quartiers",
            "2 cuillères à café de sucre",
            "10 feuilles de menthe",
            "Eau gazeuse",
            "Glace pilée"
          ]),
          preparation: "Dans un verre, écrasez les quartiers de citron vert avec le sucre et les feuilles de menthe pour libérer les saveurs. Ajoutez la glace pilée, puis complétez avec de l'eau gazeuse. Remuez doucement et décorez avec une branche de menthe et une tranche de citron vert si désiré.",
          image: "https://therecipecritic.com/wp-content/uploads/2023/06/virgin-mojito.jpg",
          isAlcoholic: false,  // Virgin Mojito est non-alcoolique
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
  name: "Piña Colada Virgin",
  description: "Une version sans alcool de la Piña Colada, tropicale et crémeuse, parfaite pour un goût d'évasion sans alcool.",
  ingredients: JSON.stringify([
    "90 ml de jus d'ananas",
    "30 ml de crème de coco",
    "60 ml de lait de coco",
    "Glace pilée"
  ]),
  preparation: "Mixez tous les ingrédients avec de la glace pilée dans un blender jusqu'à obtenir une consistance lisse. Servez dans un grand verre et décorez avec une tranche d'ananas et une cerise si désiré.",
  image: "https://veenaazmanov.com/wp-content/uploads/2016/04/Virgin-Pina-Colada-Mocktail-8.jpg",
  isAlcoholic: false,  
  createdAt: new Date(),
  updatedAt: new Date(),

        },
        {

          id: 9,
          name: "Jus de Mangue et Citron Vert",
          description: "Un jus tropical rafraîchissant, alliant la douceur de la mangue au zeste du citron vert.",
          ingredients: JSON.stringify([
            "1 tasse de purée de mangue",
            "1/2 tasse de jus de citron vert",
            "1/2 tasse d'eau",
            "Glace"
          ]),
          preparation: "Mélangez la purée de mangue, le jus de citron vert et l'eau. Ajoutez de la glace et servez bien frais. Décorez avec une tranche de citron vert si désiré.",
          image: "https://www.laylita.com/recettes/wp-content/uploads/2016/07/preparation-limonade-mangue-citron-vert.jpg",
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: "Punch Tropical Virgin",
          description: "Un punch tropical sans alcool, parfait pour une fête ou pour se rafraîchir par une journée chaude.",
          ingredients: JSON.stringify([
            "1 tasse de jus d'orange",
            "1 tasse de jus de mangue",
            "1/2 tasse de jus d'ananas",
            "1/2 tasse de limonade",
            "Tranches d'orange et de citron pour garnir",
            "Glace"
          ]),
          preparation: "Mélangez tous les jus avec la limonade dans un grand pichet. Ajoutez de la glace et remuez bien. Servez avec des tranches d'orange et de citron pour la garniture.",
          image: "https://www.shutterstock.com/image-photo/alcoholic-cocktail-vodka-pineapple-juice-260nw-2127936077.jpg",
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: "Jus de Papaye et Citron",
          description: "Un jus de papaye rafraîchissant avec une touche de citron, offrant une saveur tropicale unique.",
          ingredients: JSON.stringify([
            "1 tasse de purée de papaye",
            "1/2 tasse de jus de citron",
            "1/2 tasse d'eau",
            "Glace"
          ]),
          preparation: "Mélangez la purée de papaye avec le jus de citron et l'eau. Ajoutez de la glace et servez frais. Décorez avec un quartier de papaye si désiré.",
          image: "https://img.cuisineaz.com/660x660/2015/05/22/i95526-photo-de-jus-de-papaye.jpeg",
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: "Virgin Caipirinha",
          description: "Une version sans alcool de la Caipirinha brésilienne, avec du citron vert et du sucre pour une boisson rafraîchissante.",
          ingredients: JSON.stringify([
            "1 citron vert, coupé en quartiers",
            "2 cuillères à café de sucre",
            "Eau pétillante",
            "Glace pilée"
          ]),
          preparation: "Écrasez les quartiers de citron vert avec le sucre dans un verre. Ajoutez la glace pilée, puis complétez avec de l'eau pétillante. Remuez doucement et servez.",
          image: "https://www.monbana.com/app/uploads/2018/12/virgin-caipirina.jpg",
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          name: "Jus de Fruit de la Passion et Ananas",
          description: "Un mélange tropical de fruit de la passion et d'ananas pour une boisson sucrée et rafraîchissante.",
          ingredients: JSON.stringify([
            "1 tasse de purée de fruit de la passion",
            "1 tasse de jus d'ananas",
            "1/2 tasse d'eau",
            "Glace"
          ]),
          preparation: "Mélangez la purée de fruit de la passion, le jus d'ananas et l'eau. Ajoutez de la glace et servez bien frais. Décorez avec des morceaux de fruit de la passion si désiré.",
          image: "https://restaurants.mu/blog-admin/wp-content/uploads/2018/09/pineapple-passion-fruit-juice-3.jpg",
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          name: "Jus de Coco et Ananas",
          description: "Un mélange crémeux et tropical de jus de coco et d'ananas, parfait pour une boisson exotique sans alcool.",
          ingredients: JSON.stringify([
            "1 tasse de jus de coco",
            "1 tasse de jus d'ananas",
            "1/2 tasse de lait",
            "Glace"
          ]),
          preparation: "Mélangez le jus de coco, le jus d'ananas et le lait jusqu'à obtenir une texture lisse. Servez avec de la glace et décorez avec une tranche d'ananas si désiré.",
          image: "https://www.marque-alcool.com/wp-content/uploads/2023/01/5-SECRETS-POUR-REUSSIR-SA-PINA-COLADA-2.jpg",
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          name: "Jus de Papaye et Mangue",
          description: "Un jus onctueux et sucré de papaye et de mangue, parfait pour une pause tropicale sans alcool.",
          ingredients: JSON.stringify([
            "1 tasse de purée de papaye",
            "1 tasse de purée de mangue",
            "1/2 tasse de jus de citron",
            "Glace"
          ]),
          preparation: "Mixez la purée de papaye, la purée de mangue et le jus de citron jusqu'à obtenir une consistance lisse. Servez avec de la glace et décorez avec des morceaux de papaye ou de mangue si désiré.",
          image: "https://static.wixstatic.com/media/d0e1e9_0d215d2a510b4554849faccabc4670f9~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d0e1e9_0d215d2a510b4554849faccabc4670f9~mv2.jpg",
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          name: "Tropical Lemonade",
          description: "Une limonade rafraîchissante avec un mélange de fruits tropicaux pour un goût exotique sans alcool.",
          ingredients: JSON.stringify([
            "1 tasse de jus d'orange",
            "1/2 tasse de jus de mangue",
            "1/2 tasse de jus de citron",
            "2 cuillères à soupe de sucre",
            "Eau",
            "Glace"
          ]),
          preparation: "Mélangez tous les jus avec le sucre et ajoutez de l'eau pour diluer à votre goût. Ajoutez de la glace et servez bien frais. Décorez avec des tranches de fruits tropicaux si désiré.",
          image: "https://www.wikihow.com/images_en/thumb/6/66/Make-Limeade-Step-18-Version-2.jpg/v4-1200px-Make-Limeade-Step-18-Version-2.jpg",
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date(),
      
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
