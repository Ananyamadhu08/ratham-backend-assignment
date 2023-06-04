import mongoose, { Model, Schema } from 'mongoose';
import { DeanInterface } from '../interfaces';

const deanSchema = new Schema<DeanInterface>({
  universityID: String,
  name: String,
  password: String,
  token: String,
});

export const Dean: Model<DeanInterface> = mongoose.model('Dean', deanSchema);
