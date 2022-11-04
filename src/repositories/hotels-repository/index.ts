import { prisma } from '@/config';

async function getHotels() {
  return await prisma.hotel.findMany();
}

async function getRoomsVacancies() {
  const firstHotelRooms = await prisma.room.groupBy({
    by: ['accommodationType'],
    where: {
      hotelId: {
        equals: 1,
      },
    },
    _sum: {
      accommodationType: true,
    },
  });

  const secondHotelRooms = await prisma.room.groupBy({
    by: ['accommodationType'],

    where: {
      hotelId: {
        equals: 2,
      },
    },

    _sum: {
      accommodationType: true,
    },
  });

  const thirdHotelRooms = await prisma.room.groupBy({
    by: ['accommodationType'],

    where: {
      hotelId: {
        equals: 3,
      },
    },

    _sum: {
      accommodationType: true,
    },
  });

  return {
    firstHotelRooms,
    secondHotelRooms,
    thirdHotelRooms,
  };
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
  getRoomsVacancies,
};

export default hotelsRepository;
