import express, { Router } from 'express';

const userRouter: Router = express.Router();

// Get all users
userRouter.get('/');

// Get an user
userRouter.get('/:uid');

// Delete an user
userRouter.delete('/:uid');

// Update an user
userRouter.put('/:uid');

export default userRouter;
