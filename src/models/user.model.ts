import mongoose, { Schema, model } from 'mongoose';
import { userType } from '../types/user.type';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { UserModelInterface } from '../interfaces/user.interface';

const userSchema = new Schema<userType>(
  {
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Register
userSchema.statics.register = async function (
  name,
  email,
  password,
  photoUrl,
  address,
  phoneNumber
): Promise<userType> {
  //Blank Checking
  if (!name || !email || !password || !photoUrl) {
    throw new Error(
      'Please provide all the following fields: Name, Email, Password, Photo URL'
    );
  }

  //Check if email is not valid
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email');
  }

  // If email exist
  const isEmailExist = await this.findOne({ email });

  if (isEmailExist) {
    throw new Error('Email already exist');
  }

  // If the password is not strong.
  if (!validator.isStrongPassword(password)) {
    throw new Error(
      'Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
    );
  }

  //Encrypt password or Hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

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
userSchema.statics.login = async function (email, password): Promise<userType> {
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
  const matching = await bcrypt.compare(password, user.password);

  if (!matching) {
    throw new Error('Incorrect email or Password!');
  }

  return user;
};

const UserModel = model<userType, UserModelInterface>('User', userSchema);

export default UserModel;
