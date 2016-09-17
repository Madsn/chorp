import { GraphQLList as List } from 'graphql';
import BookingType from '../types/BookingType';
import Booking from '../models/Booking';

const booking = {
  type: new List(BookingType),
  resolve() {
    return Booking.findAll();
  },
};

export default booking;
