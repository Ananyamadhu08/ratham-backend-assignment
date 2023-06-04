import mongoose, { Model, Schema } from 'mongoose';
import { SessionInterface } from '../interfaces';

const sessionSchema = new Schema<SessionInterface>({
  time: String,
});

export const Session: Model<SessionInterface> = mongoose.model(
  'Session',
  sessionSchema,
);
