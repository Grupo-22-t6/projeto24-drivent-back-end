import { paymentPost, paymentVerification } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { createPaymentSchema } from '@/schemas';
import { Router } from 'express';

const paymentsRouter = Router();

paymentsRouter.all('/*', authenticateToken);
paymentsRouter.post('/', validateBody(createPaymentSchema), paymentPost);
paymentsRouter.get('/', paymentVerification);

export { paymentsRouter };
