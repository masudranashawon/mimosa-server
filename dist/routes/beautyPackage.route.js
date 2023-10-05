"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const beautyPackage_controller_1 = __importDefault(require("../controllers/beautyPackage.controller"));
const beautyPackageRouter = express_1.default.Router();
const authInstance = new auth_middleware_1.default();
const beautyPackageInstance = new beautyPackage_controller_1.default();
// Get all beauty packages
beautyPackageRouter.get('/', beautyPackageInstance.getAllBeautyPackages);
// Get a beauty package
beautyPackageRouter.get('/:bpid', beautyPackageInstance.getABeautyPackage);
// Create a beauty package
beautyPackageRouter.post('/', authInstance.isAuthenticated, authInstance.isAdmin, beautyPackageInstance.createABeautyPackage);
// Update a beauty package
beautyPackageRouter.put('/:bpid', authInstance.isAuthenticated, authInstance.isAdmin, beautyPackageInstance.updateABeautyPackage);
// Delete a beauty package
beautyPackageRouter.delete('/:bpid', authInstance.isAuthenticated, authInstance.isAdmin, beautyPackageInstance.deleteABeautyPackage);
exports.default = beautyPackageRouter;
