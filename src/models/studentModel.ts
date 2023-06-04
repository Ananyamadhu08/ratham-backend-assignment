import mongoose, { Model, Schema } from 'mongoose';
import { StudentInterface } from '../interfaces';

const studentSchema = new Schema<StudentInterface>({
  universityID: String,
  name: String,
  password: String,
  token: String,
});

export const Student: Model<StudentInterface> = mongoose.model(
  'Student',
  studentSchema,
);
