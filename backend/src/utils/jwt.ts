import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the JWT secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET;

// Check if JWT_SECRET is not set and throw an error
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}

/**
 * Generates a JWT token for a given user ID.
 * @param userId - The ID of the user for whom to generate the token.
 * @returns The generated JWT token.
 */
export const generateToken = (userId: string): string => {
  // Set token expiration (e.g., 1 hour)
  const expiresIn = '1h';

  // Create the payload (you can customize it as needed)
  const payload = { id: userId };

  // Sign the token with the secret and specify the expiration time
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn });

  return token;
};

/**
 * Verifies a JWT token and returns the decoded payload.
 * @param token - The JWT token to verify.
 * @returns The decoded payload if valid, otherwise null.
 */
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    // Verify the token and return the decoded payload
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error('JWT verification error:', error);
    return null; // Return null if verification fails
  }
};

// Extend Request interface to include 'user' property
interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

/**
 * Middleware to authenticate JWT tokens in request headers.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.sendStatus(401); // Unauthorized if no token
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.sendStatus(403); // Forbidden if token is invalid
  }

  // Attach decoded user info to request
  req.user = decoded;
  next(); // Call the next middleware, no return required
};
