"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const specialist_controller_1 = __importDefault(require("../controllers/specialist.controller"));
const specialistsRouter = express_1.default.Router();
const authInstance = new auth_middleware_1.default();
const specialistInstance = new specialist_controller_1.default();
// Get all specialists
specialistsRouter.get('/', specialistInstance.getAllSpecialists);
// Get a specialist
specialistsRouter.get('/:sid', specialistInstance.getASpecialist);
// Create a specialist
specialistsRouter.post('/:bpid', authInstance.isAuthenticated, authInstance.isAdmin, specialistInstance.createASpecialist);
// Update a specialist
specialistsRouter.put('/:sid', authInstance.isAuthenticated, authInstance.isAdmin, specialistInstance.updateASpecialist);
// Delete a specialist
specialistsRouter.delete('/:sid', authInstance.isAuthenticated, authInstance.isAdmin, specialistInstance.deleteASpecialist);
exports.default = specialistsRouter;
