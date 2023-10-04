import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { handleError } from '../errors/handle.error';
import BeautyPackageModel from '../models/beautyPackage.model';

export default class BeautyPackageController {
  constructor() {}

  // Get all beauty packageg
  public async getAllBeautyPackages(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const beautyPackages = await BeautyPackageModel.find({});

        res.status(200).json(beautyPackages);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  // Get a beauty package
  public async getABeautyPackage(req: Request, res: Response): Promise<void> {
    try {
      const { bpid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bpid)) {
        res.status(404).json({ message: 'Beauty Package not found' });
      }

      await Promise.resolve().then(async () => {
        const beautyPackage = await BeautyPackageModel.findById(bpid);

        res.status(200).json(beautyPackage);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  // Create a beauty package
  public async createABeautyPackage(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { title, description, category, images, price } = req.body;

      if (!title || !description || !category || !images || !price) {
        throw new Error(
          'Please provide all the following fields: Title, Description, Category, Images, Price'
        );
      }

      await Promise.resolve().then(async () => {
        const beautyPackage = await BeautyPackageModel.create({
          title,
          description,
          category,
          images,
          price,
        });

        res.status(200).json(beautyPackage);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  // Update a beauty package
  public async updateABeautyPackage(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { title, description, category, images, price } = req.body;
      const { bpid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bpid)) {
        res.status(404).json({ message: 'Beauty Package not found' });
      }

      if (!title || !description || !category || !images || !price) {
        throw new Error(
          'Please provide all the following fields: Title, Description, Category, Images, Price'
        );
      }

      await Promise.resolve().then(async () => {
        const beautyPackage = await BeautyPackageModel.findByIdAndUpdate(
          bpid,
          {
            title,
            description,
            category,
            images,
            price,
          },
          { new: true }
        );

        res.status(200).json(beautyPackage);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  // Delete a beauty package
  public async deleteABeautyPackage(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { bpid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bpid)) {
        res.status(404).json({ message: 'Beauty Package not found' });
      }

      await Promise.resolve().then(async () => {
        const beautyPackage = await BeautyPackageModel.findByIdAndDelete(bpid);

        res.status(200).json(beautyPackage);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
