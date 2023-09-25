import dotenv from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';

dotenv.config();

export default class JWTTokenManager {
  private readonly secret: string;
  private readonly expiresIn: string;

  constructor() {
    this.secret = process.env.JWT_SECRET as string;
    this.expiresIn = '7d';
  }

  // Token creation
  public createToken(id: string): string {
    try {
      const token = jwt.sign({ id }, this.secret, {
        expiresIn: this.expiresIn,
      });

      return token;
    } catch (error) {
      throw new Error('Token creation failed');
    }
  }

  // Token verification
  public verifyToken(token: string): JwtPayload | string | object {
    try {
      const payload = jwt.verify(token, this.secret);

      return payload;
    } catch (error) {
      throw new Error('Token verification failed');
    }
  }
}
