import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import BeautyPackageController from '../controllers/beautyPackage.controller';

const beautyPackageRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const beautyPackageInstance = new BeautyPackageController();

// Get all beauty packages
beautyPackageRouter.get('/', beautyPackageInstance.getAllBeautyPackages);

// Get a beauty package
beautyPackageRouter.get('/:bpid', beautyPackageInstance.getABeautyPackage);

// Create a beauty package
beautyPackageRouter.post(
  '/',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  beautyPackageInstance.createABeautyPackage
);

// Update a beauty package
beautyPackageRouter.put(
  '/bpid',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  beautyPackageInstance.updateABeautyPackage
);

// Delete a beauty package
beautyPackageRouter.delete(
  '/bpid',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  beautyPackageInstance.deleteABeautyPackage
);

export default beautyPackageRouter;
