"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const booking_controller_1 = __importDefault(require("../controllers/booking.controller"));
const bookingRouter = express_1.default.Router();
const authInstance = new auth_middleware_1.default();
const bookingInstance = new booking_controller_1.default();
// Create a booking
bookingRouter.post('/create/:bpid', authInstance.isAuthenticated, bookingInstance.createABooking);
// Delete a booking
bookingRouter.delete('/:bid', authInstance.isAuthenticated, bookingInstance.deleteABooking);
// Get all bookings
bookingRouter.get('/', authInstance.isAuthenticated, authInstance.isAdmin, bookingInstance.getAllBookings);
exports.default = bookingRouter;
