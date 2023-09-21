import express, { Router } from 'express';

const beautyPackageRouter: Router = express.Router();

// Get all beauty packages
beautyPackageRouter.get('/');

// Get a beauty package
beautyPackageRouter.get('/:bpid');

// Create a beauty package
beautyPackageRouter.post('/');

// Update a beauty package
beautyPackageRouter.put('/bpid');

// Delete a beauty package
beautyPackageRouter.delete('/bpid');

export default beautyPackageRouter;
