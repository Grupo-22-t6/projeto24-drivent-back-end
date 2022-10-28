import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

async function create(data: Prisma.PaymentUncheckedCreateInput) {
  return await prisma.payment.create({
    data,
  });
}

const paymentRepository = {
  create,
};

export default paymentRepository;
