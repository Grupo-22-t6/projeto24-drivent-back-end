import { Payment } from '@prisma/client';

export type CreatePaymentParams = Omit<Payment, 'id' | 'createdAt'>;

export async function createPayment(paymentData: CreatePaymentParams, userId: number) {
  return;
}

const paymentService = {
  createPayment,
};

export default paymentService;
