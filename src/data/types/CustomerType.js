import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLNonNull as NonNull,
} from 'graphql';

const CustomerType = new ObjectType({
  name: 'Customer',
  fields: {
    id: { type: new NonNull(ID) },
  },
});

export default CustomerType;
