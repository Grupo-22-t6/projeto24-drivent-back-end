import { CreatePaymentParams } from '@/services/payments-service';
import Joi from 'joi';

export const createPaymentSchema = Joi.object<CreatePaymentParams>({
  isPresential: Joi.boolean().required(),
  isOnline: Joi.boolean().required(),
  paymentValue: Joi.number().required(),
  cardNumber: Joi.string().required(),
  cardName: Joi.string().required(),
  expirationDate: Joi.date().required(),
  securityCode: Joi.string().required(),
  eventId: Joi.number().required(),
});
