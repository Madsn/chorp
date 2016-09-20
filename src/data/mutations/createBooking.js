import {GraphQLString} from 'graphql';
import BookingType from '../types/BookingType';
import Booking from '../models/Booking';

const createBooking = {
  type: BookingType,
  fields: {
    booking: {type: BookingType},
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
    console.log(newBooking.id);
    const returnObj = {
      booking: newBooking,
    };
    console.log(returnObj);
    return returnObj;
  },
};

export default createBooking;
