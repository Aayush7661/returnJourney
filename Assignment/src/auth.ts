import { NextFunction, Request, Response } from "express";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const timestamp = Date.now();
  (req as any).timestamp = timestamp;
  next();
};
