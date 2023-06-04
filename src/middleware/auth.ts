import { NextFunction, Response } from 'express';
import { CustomRequest } from '../controllers/studentController';
import { Student, Dean } from '../models';

export const validateStudentToken = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const student = await Student.findOne({ token: bearerHeader });
    if (student) {
      next();
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
};

export const validateDeanToken = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const dean = await Dean.findOne({ token: bearerHeader });

    if (dean) {
      next();
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
};
