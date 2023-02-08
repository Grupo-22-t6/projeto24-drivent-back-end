import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

async function create(data: Prisma.PaymentUncheckedCreateInput) {
  return await prisma.payment.create({
    data,
  });
}

async function getByUserId(userId: number) {
  return await prisma.payment.findFirst({
    where: {
      userId,
    },
  });
}

const paymentRepository = {
  create,
  getByUserId,
};

export default paymentRepository;
