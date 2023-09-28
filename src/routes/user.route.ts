import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import UserController from '../controllers/user.controller';

const userRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const userInstance = new UserController();

// Get an user
userRouter.get('/:uid', authInstance.isAuthenticated, userInstance.getAnUser);

// Delete an user
userRouter.delete(
  '/:uid',
  authInstance.isAuthenticated,
  userInstance.deleteAnUser
);

// Update an user
userRouter.put(
  '/:uid',
  authInstance.isAuthenticated,
  userInstance.updateAnUser
);

// Get all users
userRouter.get(
  '/',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  userInstance.getAllUsers
);

export default userRouter;
