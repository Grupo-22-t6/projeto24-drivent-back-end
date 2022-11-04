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
  const vaccanciesTotal = await hotelRepository.getRoomsVacanciesTotalByHotel(hotelId);
  const reserves = await hotelRepository.getRoomsReservesByHotel(hotelId);
  return vaccanciesTotal._sum.accommodationType - reserves.length;
}

const hotelsService = {
  getHotels,
};

export default hotelsService;
