import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function paymentPost(req: Request, res: Response) {
  res.status(httpStatus.CREATED).json();
}
