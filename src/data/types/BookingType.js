import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntegerType,
  GraphQLString as StringType,
} from 'graphql';

const BookingType = new ObjectType({
  name: 'Booking',
  fields: {
    id: { type: IntegerType },
    category: { type: StringType },
    customer: { type: StringType },
    details: { type: StringType },
    status: { type: StringType },
  },
});

export default BookingType;
