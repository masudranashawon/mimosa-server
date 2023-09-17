import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoSenitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import hpp from 'hpp';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.setupRouter();
    this.connectToDatabase();
  }

  private configureMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(mongoSenitize());
    this.app.use(helmet());
    this.app.use(hpp());
  }

  private setupRouter(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).json({ message: 'Welcome to Mimosa server!' });
    });
  }

  private connectToDatabase(): void {
    const URI = process.env.MONGO_URI as string;

    mongoose
      .connect(URI)
      .then(() => {
        const PORT = process.env.PORT || 4000;

        this.app.listen(PORT, () => {
          console.log(`Server is running on port: ${PORT}`);
        });
      })
      .catch((error) => {
        console.log(`Database connection error: ${error}`);
      });
  }
}

dotenv.config();

new App();
