import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { handleError } from '../errors/handle.error';
import SpecialistModel from '../models/specialist.model';
import BeautyPackageModel from '../models/beautyPackage.model';

export default class SpecialistController {
  constructor() {}

  // Get all specialist
  public async getAllSpecialists(req: Request, res: Response): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const specialists = await SpecialistModel.find({});

        res.status(200).json(specialists);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  // Get a specialist
  public async getASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { sid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(sid)) {
        res.status(404).json({ message: 'Specialist not found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.findById(sid);

        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  // Create a specialist
  public async createASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { name, designation, bio, photoUrl, dateOfBirth } = req.body;
      const { bpid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bpid)) {
        res.status(404).json({ message: 'Beauty Package not found' });
      }

      if (!name || !designation || !bio || !photoUrl || !dateOfBirth) {
        throw new Error(
          'Please provide all the following fields: Name, Designation, Bio, Photo URL, Date of Birth'
        );
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.create({
          name,
          designation,
          bio,
          photoUrl,
          dateOfBirth,
        });

        await BeautyPackageModel.findByIdAndUpdate(bpid, {
          $addToSet: {
            specialists: specialist._id,
          },
        });

        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  // Update a specialist
  public async updateASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { name, designation, bio, photoUrl, dateOfBirth } = req.body;
      const { sid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(sid)) {
        res.status(404).json({ message: 'Specialist not found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.findByIdAndUpdate(
          sid,
          {
            name,
            designation,
            bio,
            photoUrl,
            dateOfBirth,
          },
          { new: true }
        );

        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  // Delete a specialist
  public async deleteASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { sid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(sid)) {
        res.status(404).json({ message: 'Specialist not found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.findByIdAndDelete(sid);

        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
