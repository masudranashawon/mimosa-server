import { Request, Response } from 'express';
import { handleError } from '../errors/handle.error';
import mongoose from 'mongoose';
import UserModel from '../models/user.model';

export default class UserController {
  constructor() {}

  // Get an user
  public async getAnUser(req: Request, res: Response): Promise<void> {
    try {
      const { uid } = req.params;
      const userId = req.user?.id;

      if (!mongoose.Types.ObjectId.isValid(uid)) {
        res.status(404).json({ message: 'User not found' });
      }

      if (uid !== userId.toString()) {
        res.status(403).json({ message: 'Forbidden' });
      }

      await Promise.resolve().then(async () => {
        const user = await UserModel.findById(uid);

        res.status(200).json(user);
      });
    } catch (error) {
      await handleError(error, res);
    }
  }

  // Delete an user
  public async deleteAnUser(req: Request, res: Response): Promise<void> {
    try {
      const { uid } = req.params;
      const userId = req.user?.id;

      if (!mongoose.Types.ObjectId.isValid(uid)) {
        res.status(404).json({ message: 'User not found' });
      }

      if (uid !== userId.toString()) {
        res.status(403).json({ message: 'Forbidden' });
      }

      await Promise.resolve().then(async () => {
        const user = await UserModel.findByIdAndDelete(uid);

        res.status(200).json(user);
      });
    } catch (error) {
      await handleError(error, res);
    }
  }

  // Update an user
  public async updateAnUser(req: Request, res: Response): Promise<void> {
    try {
      const { uid } = req.params;
      const { name, photoUrl, address, phoneNumber } = req.body;
      const userId = req.user?.id;

      if (!mongoose.Types.ObjectId.isValid(uid)) {
        res.status(404).json({ message: 'User not found' });
      }

      if (uid !== userId.toString()) {
        res.status(403).json({ message: 'Forbidden' });
      }

      await Promise.resolve().then(async () => {
        const user = await UserModel.findByIdAndUpdate(
          uid,
          {
            name,
            photoUrl,
            address,
            phoneNumber,
          },
          { new: true }
        );

        res.status(200).json(user);
      });
    } catch (error) {
      await handleError(error, res);
    }
  }

  // Get all user
  public async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const users = await UserModel.find({});

        res.status(200).json(users);
      });
    } catch (error) {
      await handleError(error, res);
    }
  }
}
