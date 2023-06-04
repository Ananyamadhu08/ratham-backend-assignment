import express from 'express';
import { studentController } from '../controllers/studentController';
import { validateStudentToken } from '../middleware/auth';

const router = express.Router();

router.post('/login', studentController.login);
router.post('/register', studentController.register);
router.post('/book', validateStudentToken, studentController.bookSession);
router.get('/sessions', validateStudentToken, studentController.getSessions);

export { router as studentRoutes };
