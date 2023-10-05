"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handle_error_1 = require("../errors/handle.error");
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("../models/user.model"));
class UserController {
    constructor() { }
    // Get an user
    async getAnUser(req, res) {
        var _a;
        try {
            const { uid } = req.params;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            if (!mongoose_1.default.Types.ObjectId.isValid(uid)) {
                res.status(404).json({ message: 'User not found' });
            }
            if (uid !== userId.toString()) {
                res.status(403).json({ message: 'Forbidden' });
            }
            await Promise.resolve().then(async () => {
                const user = await user_model_1.default.findById(uid).populate('bookings');
                res.status(200).json(user);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Delete an user
    async deleteAnUser(req, res) {
        var _a;
        try {
            const { uid } = req.params;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            if (!mongoose_1.default.Types.ObjectId.isValid(uid)) {
                res.status(404).json({ message: 'User not found' });
            }
            if (uid !== userId.toString()) {
                res.status(403).json({ message: 'Forbidden' });
            }
            await Promise.resolve().then(async () => {
                const user = await user_model_1.default.findByIdAndDelete(uid);
                res.status(200).json(user);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Update an user
    async updateAnUser(req, res) {
        var _a;
        try {
            const { uid } = req.params;
            const { name, photoUrl, address, phoneNumber } = req.body;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            if (!mongoose_1.default.Types.ObjectId.isValid(uid)) {
                res.status(404).json({ message: 'User not found' });
            }
            if (uid !== userId.toString()) {
                res.status(403).json({ message: 'Forbidden' });
            }
            await Promise.resolve().then(async () => {
                const user = await user_model_1.default.findByIdAndUpdate(uid, {
                    name,
                    photoUrl,
                    address,
                    phoneNumber,
                }, { new: true });
                res.status(200).json(user);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Get all user
    async getAllUsers(req, res) {
        try {
            await Promise.resolve().then(async () => {
                const users = await user_model_1.default.find({});
                res.status(200).json(users);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
}
exports.default = UserController;
