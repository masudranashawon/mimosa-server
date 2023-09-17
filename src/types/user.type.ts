import { Document } from 'mongoose';
import { bookingType } from './booking.type';

export type userType = {
  name: string;
  email: string;
  password: string;
  photoUrl: string;
  address?: string;
  phoneNumber?: string;
  role: 'user' | 'admin';
  bookings: bookingType[];
} & Document;
