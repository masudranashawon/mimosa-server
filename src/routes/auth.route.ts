import express, { Router } from 'express';

const authRouter: Router = express.Router();

// Register an user
authRouter.post('/register');

// Login user
authRouter.post('/login');

export default authRouter;
