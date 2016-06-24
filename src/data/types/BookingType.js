import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const BookingType = new ObjectType({
  name: 'Booking',
  fields: {
    id: { type: new NonNull(ID) },
    category: { type: StringType },
    customer: { type: StringType },
    details: { type: StringType },
    status: { type: StringType },
  },
});

export default BookingType;
