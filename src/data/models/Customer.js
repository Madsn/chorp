import DataType from 'sequelize';
import Model from '../sequelize';

const Customer = Model.define('Customer', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
});

export default Customer;
