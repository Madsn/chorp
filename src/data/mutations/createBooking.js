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
    const returnObj = {
      booking: {
        category: newBooking.category,
        customer: newBooking.customer,
        details: newBooking.details,
        status: newBooking.status,
      },
    };
    console.log(returnObj);
    return returnObj;
  },
};

export default createBooking;
