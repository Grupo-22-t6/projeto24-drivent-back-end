import userRepository from '@/repositories/user-repository';
import { notFoundError } from '@/errors';
import hotelRepository from '@/repositories/hotels-repository';
import { roomIsFull, roomNotSpecified, userAlreadyReserveRoom } from './erros';

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
async function reserveRoom(roomId: number, userId: number) {
  if (!roomId) throw roomNotSpecified();
  const room = await hotelRepository.getRoomById(roomId);
  if (!room) throw notFoundError();
  if (room.accommodationType <= room.reserves.length) throw roomIsFull();
  const { reserve: userReverse } = await userRepository.findById(userId);
  //if (userReverse.length > 0) throw userAlreadyReserveRoom();
  const reserve = await hotelRepository.upsertReserve(roomId, userId);
  return reserve;
}

async function getReserve(userId: number) {
  const reserve = await hotelRepository.getReserveByUserId(userId);
  if (!reserve) throw notFoundError();
  const { hotelId, number, accommodationType, reserves } = await hotelRepository.getRoomById(reserve.roomId);

  return { hotelId, number, accommodationType, roommates: reserves.length };
}

const hotelsService = {
  getHotels,
  getRoomsByHotel,
  reserveRoom,
  getReserve,
};

export default hotelsService;
