import express, { Router } from 'express';

const specialistsRouter: Router = express.Router();

// Get all specialists
specialistsRouter.get('/');

// Get a specialist
specialistsRouter.get('/:sid');

// Create a specialist
specialistsRouter.post('/');

// Update a specialist
specialistsRouter.put('/:sid');

// Delete a specialist
specialistsRouter.delete('/:sid');

export default specialistsRouter;
