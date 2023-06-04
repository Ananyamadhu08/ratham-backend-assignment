import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = 8080;

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(cookieParser());

const URI = process.env.MONGODB_URL!;

mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to mongoDB');
  })
  .catch((err: Error) => {
    console.log('MongoDB connection error:', err);
  });

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
