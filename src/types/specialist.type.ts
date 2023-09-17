import { Document } from 'mongoose';
import { beautyPackageType } from './BeautyPackage.type';

export type specialistType = {
  name: string;
  designation: string;
  bio: string;
  photoUrl: string;
  dateOfBirth: string;
  beautyPackages: beautyPackageType[];
} & Document;
