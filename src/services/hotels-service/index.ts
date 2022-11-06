import { notFoundError } from '@/errors';
import hotelRepository from '@/repositories/hotels-repository';

async function getHotels() {
  const hotels = await hotelRepository.getHotels();
  if (!hotels) throw notFoundError();
  const hotelsFormated = await Promise.all(
    hotels.map(async (hotel) => {
      const roomsVacancies = await getRoomsVacanciesByHotel(hotel.id);
      return {
        ...hotel,
        roomsVacancies,
      };
    }),
  );
  return hotelsFormated;
}

async function getRoomsVacanciesByHotel(hotelId: number) {
  const vacanciesTotal = await hotelRepository.getRoomsVacanciesTotalByHotel(hotelId);
  const reserves = await hotelRepository.getRoomsReservesByHotel(hotelId);
  return vacanciesTotal._sum.accommodationType - reserves.length;
}

async function getRoomsByHotel(hotelId: number) {
  const hotel = await hotelRepository.getHotelById(hotelId);
  if (!hotel) throw notFoundError();
  const rooms = await hotelRepository.getRoomsByHotel(hotelId);
  return rooms;
}
async function reserveRoom(roomId: number, userId: number) {}

const hotelsService = {
  getHotels,
  getRoomsByHotel,
  reserveRoom,
};

export default hotelsService;
