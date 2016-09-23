import DataType from 'sequelize';
import Model from '../sequelize';
import Customer from './Customer';

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
    type: DataType.INTEGER,
    references: {
      model: Customer,
      key: 'id',
      deferrable: DataType.Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  details: {
    type: DataType.STRING(255),
  },

  status: {
    type: DataType.STRING(255),
  },
});

export default Booking;
