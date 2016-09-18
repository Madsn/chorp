module.exports = {
  up: (queryInterface, DataType) => queryInterface.createTable('Booking', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER,
    },
    category: {
      type: DataType.STRING,
    },
    customer: {
      type: DataType.STRING,
    },
    details: {
      type: DataType.STRING,
    },
    status: {
      type: DataType.STRING,
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
  down: queryInterface => queryInterface.dropTable('Booking'),
};
