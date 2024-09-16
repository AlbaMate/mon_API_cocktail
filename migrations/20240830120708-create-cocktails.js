'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};


//code propuesto por https://medium.com/



// module . exportations = { 
//   async  up ( queryInterface, Sequelize ) { 
//     let vouchers = require ( '../hacktiv_voucher.json' ); 
//     vouchers. forEach ( el => { 
//       supprimer el. id ; 
//       el. createdAt = nouvelle  date (); 
//       el. updatedAt = nouvelle  date (); 
//     }); 
//     wait queryInterface. bulkInsert ( 'Bons' , bons, {}); 
//   }, 

//   async  down ( queryInterface, Sequelize ) { 
//     wait queryInterface. bulkDelete ( 'Bons' , null , { 
//       truncate : true , 
//       cascade : true , 
//       restartIdentity : true
//      }); 
//   } 
// };