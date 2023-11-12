import { Response } from 'express';
import { ZodError } from 'zod';

import { AppError } from './AppError';

export const errorHandler = (error: unknown, res: Response): Response => {
  if (error instanceof ZodError) {
    return res.status(400).json({ error: error.flatten().fieldErrors });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  if (error instanceof Error) {
    return res.json({ error: error.message });
  }

  return res.status(500).json({ error: 'Internal server error.' });
};
