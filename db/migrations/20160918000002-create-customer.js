module.exports = {
  up: (queryInterface, DataType) => queryInterface.createTable('Customer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataType.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataType.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Customer'),
};
