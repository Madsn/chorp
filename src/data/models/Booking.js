import DataType from 'sequelize';
import Model from '../sequelize';

const Booking = Model.define('Booking', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
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
