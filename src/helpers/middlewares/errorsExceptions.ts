import { AppErrors } from '~/shared/errors/errors';
import { Request, Response, NextFunction } from 'express';

export const errors = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppErrors) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }
  return res.status(500).json({
    success: false,
    message: err.message,
  });
};
