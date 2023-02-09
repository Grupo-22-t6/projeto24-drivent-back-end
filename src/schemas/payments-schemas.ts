import { CreatePaymentParams } from '@/services/payments-service';
import Joi from 'joi';

export const createPaymentSchema = Joi.object<CreatePaymentParams>({
  isPresential: Joi.boolean().required(),
  withHotel: Joi.boolean().required(),
  paymentValue: Joi.number().required(),
  cardNumber: Joi.string().min(16).max(19).required(),
  cardName: Joi.string().required(),
  expirationDate: Joi.date().required(),
  securityCode: Joi.string().min(3).max(4).required(),
  eventId: Joi.number().required(),
});
