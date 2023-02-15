import { notFoundError, conflictError } from '@/errors';
import eventRepository from '@/repositories/event-repository';
import paymentRepository from '@/repositories/payment-repository';
import { Payment } from '@prisma/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { creditCardExpired } from './errors';
import bcrypt from 'bcrypt';

export type CreatePaymentParams = Omit<Payment, 'id' | 'createdAt' | 'userId'>;

export async function createPayment(paymentData: CreatePaymentParams, userId: number) {
  const { eventId } = paymentData;
  const event = await eventRepository.findFirst();
  if (eventId !== event.id) throw notFoundError();
  const paymentAlreadyExists = await paymentRepository.getByUserId(userId);
  if (paymentAlreadyExists) return conflictError('Esse usuario já efetuou o pagamento');
  const formatedExpirationDate = formatDate(paymentData.expirationDate);
  const hashedSecurityCode = await bcrypt.hash(paymentData.securityCode, 12);
  return await paymentRepository.create({
    ...paymentData,
    userId,
    expirationDate: formatedExpirationDate,
    securityCode: hashedSecurityCode,
  });
}

export async function getPaymentByUser(userId: number) {
  const payment = await paymentRepository.getByUserId(userId);
  if (!payment) throw notFoundError();
  return payment;
}

function formatDate(date: Date) {
  dayjs.extend(customParseFormat);
  const dateFormated = dayjs(date, 'MM/YY');
  if (dayjs().year() <= dateFormated.year()) {
    if (dayjs().month() <= dateFormated.month()) {
      return dateFormated.toISOString();
    }
  }
  throw creditCardExpired();
}
const paymentService = {
  createPayment,
  getPaymentByUser,
};

export default paymentService;
