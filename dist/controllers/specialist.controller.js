"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const handle_error_1 = require("../errors/handle.error");
const specialist_model_1 = __importDefault(require("../models/specialist.model"));
const beautyPackage_model_1 = __importDefault(require("../models/beautyPackage.model"));
class SpecialistController {
    constructor() { }
    // Get all specialist
    async getAllSpecialists(req, res) {
        try {
            await Promise.resolve().then(async () => {
                const specialists = await specialist_model_1.default.find({});
                res.status(200).json(specialists);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Get a specialist
    async getASpecialist(req, res) {
        try {
            const { sid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(sid)) {
                res.status(404).json({ message: 'Specialist not found' });
            }
            await Promise.resolve().then(async () => {
                const specialist = await specialist_model_1.default.findById(sid);
                res.status(200).json(specialist);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Create a specialist
    async createASpecialist(req, res) {
        try {
            const { name, designation, bio, photoUrl, dateOfBirth } = req.body;
            const { bpid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(bpid)) {
                res.status(404).json({ message: 'Beauty Package not found' });
            }
            if (!name || !designation || !bio || !photoUrl || !dateOfBirth) {
                throw new Error('Please provide all the following fields: Name, Designation, Bio, Photo URL, Date of Birth');
            }
            await Promise.resolve().then(async () => {
                const specialist = await specialist_model_1.default.create({
                    name,
                    designation,
                    bio,
                    photoUrl,
                    dateOfBirth,
                });
                await beautyPackage_model_1.default.findByIdAndUpdate(bpid, {
                    $addToSet: {
                        specialists: specialist._id,
                    },
                });
                res.status(200).json(specialist);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Update a specialist
    async updateASpecialist(req, res) {
        try {
            const { name, designation, bio, photoUrl, dateOfBirth } = req.body;
            const { sid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(sid)) {
                res.status(404).json({ message: 'Specialist not found' });
            }
            await Promise.resolve().then(async () => {
                const specialist = await specialist_model_1.default.findByIdAndUpdate(sid, {
                    name,
                    designation,
                    bio,
                    photoUrl,
                    dateOfBirth,
                }, { new: true });
                res.status(200).json(specialist);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Delete a specialist
    async deleteASpecialist(req, res) {
        try {
            const { sid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(sid)) {
                res.status(404).json({ message: 'Specialist not found' });
            }
            await Promise.resolve().then(async () => {
                const specialist = await specialist_model_1.default.findByIdAndDelete(sid);
                res.status(200).json(specialist);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
}
exports.default = SpecialistController;
