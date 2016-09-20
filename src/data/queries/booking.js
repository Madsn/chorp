import {GraphQLList, GraphQLInt, GraphQLNonNull} from 'graphql';
import BookingType from '../types/BookingType';
import Booking from '../models/Booking';

const booking = {
  bookings: {
    type: new GraphQLList(BookingType),
    resolve() {
      return Booking.findAll();
    },
  },
  booking: {
    type: BookingType,
    args: {
      id: {type: new GraphQLNonNull(GraphQLInt)},
    },
    resolve(_, {id}) {
      return Booking.findById(id);
    },
  },
};

export default booking;
