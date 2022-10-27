import { Payment } from '@prisma/client';

export type CreatePaymentParams = Omit<Payment, 'id' | 'createdAt'>;
