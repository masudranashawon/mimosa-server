"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    role: {
        enum: ['user', 'admin'],
        default: 'user',
        type: String,
        required: true,
    },
    bookings: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Booking',
        },
    ],
}, {
    timestamps: true,
});
// Register
userSchema.statics.register = async function (name, email, password, photoUrl, address, phoneNumber) {
    //Blank Checking
    if (!name || !email || !password || !photoUrl) {
        throw new Error('Please provide all the following fields: Name, Email, Password, Photo URL');
    }
    //Check if email is not valid
    if (!validator_1.default.isEmail(email)) {
        throw new Error('Invalid email');
    }
    // If email exist
    const isEmailExist = await this.findOne({ email });
    if (isEmailExist) {
        throw new Error('Email already exist');
    }
    // If the password is not strong.
    if (!validator_1.default.isStrongPassword(password)) {
        throw new Error('Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    //Encrypt password or Hashing
    const salt = await bcrypt_1.default.genSalt(10);
    const hashedPassword = await bcrypt_1.default.hash(password, salt);
    //Create user
    const user = await this.create({
        name,
        email,
        password: hashedPassword,
        photoUrl,
        address,
        phoneNumber,
    });
    return user;
};
// Login
userSchema.statics.login = async function (email, password) {
    //Blank Checking
    if (!email || !password) {
        throw new Error('Please provide all the following fields: Email, Password');
    }
    // User finding
    const user = await this.findOne({ email });
    if (!user) {
        throw new Error('Incorrect email or Password!');
    }
    // Password matching
    const matching = await bcrypt_1.default.compare(password, user.password);
    if (!matching) {
        throw new Error('Incorrect email or Password!');
    }
    return user;
};
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
