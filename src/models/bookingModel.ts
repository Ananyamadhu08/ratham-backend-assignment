import mongoose, { Model, Schema } from 'mongoose';
import { BookingInterface } from '../interfaces';

export const bookingSchema = new Schema<BookingInterface>({
  studentName: String,
  bookingTime: String,
  sessionID: String,
});

export const Booking: Model<BookingInterface> = mongoose.model(
  'Booking',
  bookingSchema,
);
