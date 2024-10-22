// src/controllers/authController.ts
import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '08be35cabdc77018ed146016978eaa25901f11a5fcb5538ed8ff4d31bb649147fd3211c66919c505b705ab97e1bb1b263a4e8fbd37b838c661a2d0093b880bae';

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(name, email, hashedPassword);
  res.status(201).json({ message: 'User registered successfully.' });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
}
