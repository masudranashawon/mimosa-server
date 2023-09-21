import mongoose, { Schema, model } from 'mongoose';
import { beautyPackageType } from '../types/beautyPackage.type';

const beautyPackageSchema = new Schema<beautyPackageType>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [{ type: String, required: true }],
    price: {
      type: Number,
      required: true,
    },
    specialists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialists',
      },
    ],
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

const BeautyPackageModel = model<beautyPackageType>(
  'BeautyPackage',
  beautyPackageSchema
);

export default BeautyPackageModel;
