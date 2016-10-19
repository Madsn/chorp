// @flow
import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
} from 'graphql';

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: {
    id: {
      type: GraphQLInt,
      primaryKey: true,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    phoneNumber: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
  },
});

export default CustomerType;
