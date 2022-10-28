import paymentRepository from '@/repositories/payment-repository';
import { Payment } from '@prisma/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export type CreatePaymentParams = Omit<Payment, 'id' | 'createdAt' | 'userId'>;

export async function createPayment(paymentData: CreatePaymentParams, userId: number) {
  const expirationDate = formatDate(paymentData.expirationDate);
  return await paymentRepository.create({ ...paymentData, userId, expirationDate });
}

function formatDate(date: Date) {
  dayjs.extend(customParseFormat);
  return dayjs(date, 'MM/YY').toISOString();
}
const paymentService = {
  createPayment,
};

export default paymentService;
