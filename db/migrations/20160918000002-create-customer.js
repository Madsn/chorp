module.exports = {
  up: (queryInterface, DataType) => queryInterface.createTable('Customer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER,
    },
    created_at: {
      allowNull: false,
      type: DataType.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataType.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Customer'),
};
