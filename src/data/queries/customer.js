import { GraphQLList as List } from 'graphql';
import CustomerType from '../types/CustomerType';
import Customer from '../models/Customer';

const customer = {
  type: new List(CustomerType),
  resolve() {
    return Customer.findAll();
  },
};

export default customer;
