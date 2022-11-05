import { prisma } from '@/config';

async function getHotels() {
  return await prisma.hotel.findMany();
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
      Room: {
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
  });
}

const hotelsRepository = {
  getHotels,
  getRoomsVacanciesTotalByHotel,
  getRoomsReservesByHotel,
  getRoomsByHotel,
};

export default hotelsRepository;
