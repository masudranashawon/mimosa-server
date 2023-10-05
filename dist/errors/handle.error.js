"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = async (error, res) => {
    try {
        await Promise.reject(error);
    }
    catch (err) {
        if (err instanceof Error)
            res.status(400).json({ message: err.message });
        else
            res.status(400).json({ message: 'An unexpected error occurred' });
    }
};
exports.handleError = handleError;
