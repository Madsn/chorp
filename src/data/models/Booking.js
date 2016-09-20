import DataType from 'sequelize';
import Model from '../sequelize';

const Booking = Model.define('Booking', {

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  },

  category: {
    type: DataType.STRING(255),
  },

  customer: {
    type: DataType.STRING(255),
  },

  details: {
    type: DataType.STRING(255),
  },

  status: {
    type: DataType.STRING(255),
  },
});

export default Booking;
