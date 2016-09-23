module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Booking', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.STRING,
    },
    customer: {
      type: Sequelize.INTEGER,
    },
    details: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Booking'),
};
