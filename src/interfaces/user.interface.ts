import { Model } from 'mongoose';
import { userType } from '../types/user.type';

export interface UserModelInterface extends Model<userType> {
  register(
    name: string,
    email: string,
    password: string,
    photoUrl: string,
    address: string,
    phoneNumber: string
  ): Promise<userType>;

  login(email: string, password: string): Promise<userType>;
}
