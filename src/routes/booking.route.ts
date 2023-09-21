import express, { Router } from 'express';

const bookingRouter: Router = express.Router();

// Create a booking
bookingRouter.post('/create');

// Get all bookings
bookingRouter.get('/');

// Get all bookings for an user
bookingRouter.get('/read');

// Delete a booking
bookingRouter.delete('/:bid');

export default bookingRouter;
