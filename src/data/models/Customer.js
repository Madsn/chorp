// @flow
import DataType from 'sequelize';
import Model from '../sequelize';

const Customer = Model.define('Customer', {

  id: {
    type: DataType.INTEGER,
    primaryKey: true,
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
});

export default Customer;
