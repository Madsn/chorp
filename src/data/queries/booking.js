import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import BookingType from '../types/BookingType';
import Booking from '../models/Booking';

const booking = {
  type: new List(BookingType),
  resolve() {
    console.log('Finding bookings');
    return Booking.findAll()
  },
};

export default booking;
