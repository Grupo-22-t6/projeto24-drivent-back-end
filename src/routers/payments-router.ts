import { paymentPost } from '@/controllers';
import { Router } from 'express';

const paymentsRouter = Router();

paymentsRouter.post('/', paymentPost);

export { paymentsRouter };
