import { Document } from 'mongoose';
import { userType } from './user.type';
import { beautyPackageType } from './beautyPackage.type';

export type bookingType = {
  user: userType;
  beautyPackage: beautyPackageType;
} & Document;
