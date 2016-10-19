module.exports = {
  up: (queryInterface, DataType) => queryInterface.createTable('Customer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER,
    },
    firstName: {
      type: DataType.STRING(255),
    },
    lastName: {
      type: DataType.STRING(255),
    },
    address: {
      type: DataType.STRING(255),
    },
    phoneNumber: {
      type: DataType.STRING(255),
    },
    email: {
      type: DataType.STRING(255),
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
