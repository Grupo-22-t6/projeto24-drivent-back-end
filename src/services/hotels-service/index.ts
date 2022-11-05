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
  const rooms = await hotelRepository.getRoomsByHotel(hotelId);
  if (!rooms) throw notFoundError();
  return rooms;
}

const hotelsService = {
  getHotels,
  getRoomsByHotel,
};

export default hotelsService;
