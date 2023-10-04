import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import BookingController from '../controllers/booking.controller';

const bookingRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const bookingInstance = new BookingController();

// Create a booking
bookingRouter.post(
  '/create/:bpid',
  authInstance.isAuthenticated,
  bookingInstance.createABooking
);

// Delete a booking
bookingRouter.delete(
  '/:bid',
  authInstance.isAuthenticated,
  bookingInstance.deleteABooking
);

// Get all bookings
bookingRouter.get(
  '/',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  bookingInstance.getAllBookings
);

export default bookingRouter;
