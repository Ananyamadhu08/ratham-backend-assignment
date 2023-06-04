import { Request, Response } from 'express';
import { Student, Session, Booking } from '../models';
import { v4 as uuidv4 } from 'uuid';

export interface CustomRequest extends Request {
  token?: string;
}

export const studentController = {
  register: async (req: Request, res: Response) => {
    const { name, password } = req.body;

    try {
      const universityID = name;

      const student = new Student({
        universityID,
        password,
        name,
      });

      await student.save();

      res.json({ universityID });
    } catch (error) {
      res.sendStatus(500);
    }
  },

  login: async (req: Request, res: Response) => {
    const { universityID, password } = req.body;

    try {
      const student = await Student.findOne({ universityID, password });

      if (student) {
        const token = uuidv4();
        student.token = token;
        await student.save();

        res.json({ token });
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },

  getSessions: async (req: Request, res: Response) => {
    try {
      const sessions = await Session.find();
      res.json({ sessions });
    } catch (error) {
      res.sendStatus(500);
    }
  },

  bookSession: async (req: Request, res: Response) => {
    const { sessionID } = req.body;
    const token = req.headers.authorization; // Assuming the token is sent in the Authorization header
    const student = await Student.findOne({ token }); // Find the student using the token

    try {
      const session = await Session.findOne({ _id: sessionID });

      if (session && student?.name) {
        const bookingTime = session.time; // Retrieve the session's time
        const bookingID = uuidv4();

        const booking = new Booking({
          sessionID,
          studentName: student?.name,
          bookingTime,
        });

        await booking.save();

        // delete the booked session
        await Session.findOneAndDelete({ _id: sessionID });

        res.json({ bookingID });
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },
};
