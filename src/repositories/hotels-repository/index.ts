import { prisma } from '@/config';

async function getHotels() {
  return await prisma.hotel.findMany({
    select: {
      id: true,
      eventId: true,
      name: true,
      imageUrl: true,
      accommodationsTypes: true,
    },
  });
}

async function getHotelById(id: number) {
  return await prisma.hotel.findUnique({
    where: {
      id,
    },
  });
}

async function getRoomsVacanciesTotalByHotel(hotelId: number) {
  return await prisma.room.aggregate({
    where: {
      hotelId,
    },
    _sum: {
      accommodationType: true,
    },
  });
}

async function getRoomsReservesByHotel(hotelId: number) {
  return await prisma.reserve.findMany({
    where: {
      room: {
        hotelId,
      },
    },
  });
}

async function getRoomsByHotel(hotelId: number) {
  return await prisma.room.findMany({
    where: {
      hotelId,
    },
    select: {
      id: true,
      number: true,
      hotelId: true,
      accommodationType: true,
      reserves: {
        select: {
          id: true,
        },
      },
    },
  });
}

async function getRoomById(id: number) {
  return await prisma.room.findUnique({
    where: {
      id,
    },
    include: {
      reserves: true,
    },
  });
}
async function createReserve(roomId: number, userId: number) {
  return await prisma.reserve.create({
    data: {
      roomId,
      userId,
    },
  });
}

async function getReserveByUserId(userId: number) {
  return await prisma.reserve.findFirst({
    where: {
      userId,
    },
  });
}

async function upsertReserve(roomId: number, userId: number) {
  return await prisma.reserve.upsert({
    where: {
      userId,
    },
    create: {
      roomId,
      userId,
    },
    update: {
      roomId,
    },
  });
}
const hotelsRepository = {
  getHotels,
  getHotelById,
  getRoomsVacanciesTotalByHotel,
  getRoomsReservesByHotel,
  getRoomsByHotel,
  getRoomById,
  createReserve,
  getReserveByUserId,
  upsertReserve,
};

export default hotelsRepository;
