import { AuthenticatedRequest } from '@/middlewares';
import paymentService from '@/services/payments-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function paymentPost(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const payment = await paymentService.createPayment(req.body, userId);
  res.status(httpStatus.CREATED).json(payment);
}
