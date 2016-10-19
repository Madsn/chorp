import {GraphQLString} from 'graphql';
import BookingType from '../types/BookingType';
import Booking from '../models/Booking';

const createBooking = {
  type: BookingType,
  fields: {
    booking: {type: GraphQLString},
  },
  args: {
    category: {type: GraphQLString},
    customer: {type: GraphQLString},
    details: {type: GraphQLString},
    status: {type: GraphQLString},
  },
  resolve: async (source, {category, customer, details, status}) => {
    const newBooking = await Booking.create({
      category,
      customer,
      details,
      status,
    });
    return newBooking;
  },
};

export default createBooking;
