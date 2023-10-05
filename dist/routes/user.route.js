"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userRouter = express_1.default.Router();
const authInstance = new auth_middleware_1.default();
const userInstance = new user_controller_1.default();
// Get an user
userRouter.get('/:uid', authInstance.isAuthenticated, userInstance.getAnUser);
// Delete an user
userRouter.delete('/:uid', authInstance.isAuthenticated, userInstance.deleteAnUser);
// Update an user
userRouter.put('/:uid', authInstance.isAuthenticated, userInstance.updateAnUser);
// Get all users
userRouter.get('/', authInstance.isAuthenticated, authInstance.isAdmin, userInstance.getAllUsers);
exports.default = userRouter;
