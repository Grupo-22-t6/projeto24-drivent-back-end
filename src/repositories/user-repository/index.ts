import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}
async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      reserve: true,
    },
  });
}
const userRepository = {
  findByEmail,
  findById,
  create,
};

export default userRepository;
