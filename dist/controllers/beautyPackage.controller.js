"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const handle_error_1 = require("../errors/handle.error");
const beautyPackage_model_1 = __importDefault(require("../models/beautyPackage.model"));
class BeautyPackageController {
    constructor() { }
    // Get all beauty packages
    async getAllBeautyPackages(req, res) {
        try {
            await Promise.resolve().then(async () => {
                const beautyPackages = await beautyPackage_model_1.default.find({});
                res.status(200).json(beautyPackages);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Get a beauty package
    async getABeautyPackage(req, res) {
        try {
            const { bpid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(bpid)) {
                res.status(404).json({ message: 'Beauty Package not found' });
            }
            await Promise.resolve().then(async () => {
                const beautyPackage = await beautyPackage_model_1.default.findById(bpid);
                res.status(200).json(beautyPackage);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Create a beauty package
    async createABeautyPackage(req, res) {
        try {
            const { title, description, category, images, price } = req.body;
            if (!title || !description || !category || !images || !price) {
                throw new Error('Please provide all the following fields: Title, Description, Category, Images, Price');
            }
            await Promise.resolve().then(async () => {
                const beautyPackage = await beautyPackage_model_1.default.create({
                    title,
                    description,
                    category,
                    images,
                    price,
                });
                res.status(200).json(beautyPackage);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Update a beauty package
    async updateABeautyPackage(req, res) {
        try {
            const { title, description, category, images, price } = req.body;
            const { bpid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(bpid)) {
                res.status(404).json({ message: 'Beauty Package not found' });
            }
            await Promise.resolve().then(async () => {
                const beautyPackage = await beautyPackage_model_1.default.findByIdAndUpdate(bpid, {
                    title,
                    description,
                    category,
                    images,
                    price,
                }, { new: true });
                res.status(200).json(beautyPackage);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    // Delete a beauty package
    async deleteABeautyPackage(req, res) {
        try {
            const { bpid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(bpid)) {
                res.status(404).json({ message: 'Beauty Package not found' });
            }
            await Promise.resolve().then(async () => {
                const beautyPackage = await beautyPackage_model_1.default.findByIdAndDelete(bpid);
                res.status(200).json(beautyPackage);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
}
exports.default = BeautyPackageController;
