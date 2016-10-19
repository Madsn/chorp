import {GraphQLList, GraphQLInt, GraphQLNonNull} from 'graphql';
import CustomerType from '../types/CustomerType';
import Customer from '../models/Customer';

const customer = {
  customers: {
    type: new GraphQLList(CustomerType),
    resolve() {
      return Customer.findAll();
    },
  },
  customer: {
    type: CustomerType,
    args: {
      id: {type: new GraphQLNonNull(GraphQLInt)},
    },
    resolve(_, {id}) {
      return Customer.findById(id);
    },
  },
};

export default customer;
