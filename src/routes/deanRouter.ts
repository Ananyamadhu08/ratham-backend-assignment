import express from 'express';
import { deanController } from '../controllers';
import { validateDeanToken } from '../middleware/auth';

const router = express.Router();

router.post('/register', deanController.register);
router.post('/login', deanController.login);
router.get(
  '/pending-sessions',
  validateDeanToken,
  deanController.getPendingSessions,
);

export { router as deanRoutes };
