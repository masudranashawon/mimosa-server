import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import SpecialistController from '../controllers/specialist.controller';

const specialistsRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const specialistInstance = new SpecialistController();

// Get all specialists
specialistsRouter.get('/', specialistInstance.getAllSpecialists);

// Get a specialist
specialistsRouter.get('/:sid', specialistInstance.getASpecialist);

// Create a specialist
specialistsRouter.post(
  '/:bpid',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  specialistInstance.createASpecialist
);

// Update a specialist
specialistsRouter.put(
  '/:sid',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  specialistInstance.updateASpecialist
);

// Delete a specialist
specialistsRouter.delete(
  '/:sid',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  specialistInstance.deleteASpecialist
);

export default specialistsRouter;
