import express, { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRouter: Router = express.Router();

const authInstance = new AuthController();

// Register an user
authRouter.post('/register', authInstance.register);

// Login user
authRouter.post('/login', authInstance.login);

export default authRouter;
