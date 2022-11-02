import { notFoundError } from '@/errors';
import hotelsRepository from '@/repositories/hotels-repository';

async function getHotels() {
  const hotels = await hotelsRepository.getHotels();
  if (!hotels) throw notFoundError();
  return hotels;
}

async function getRoomsVacancies() {
  const rooms = await hotelsRepository.getRoomsVacancies();
  if (!rooms) throw notFoundError();

  const countFirstRoom = rooms.firstHotelRooms.map((rooms, index) => {
    return rooms._sum.accommodationType;
  });

  const countSecondRoom = rooms.secondHotelRooms.map((rooms, index) => {
    return rooms._sum.accommodationType;
  });

  const countThirdRoom = rooms.thirdHotelRooms.map((rooms, index) => {
    return rooms._sum.accommodationType;
  });

  //COUNTS
  let firstRoomVacancies = countFirstRoom.reduce(function (sum, i) {
    return sum + i;
  });

  let secondRoomVacancies = countSecondRoom.reduce(function (sum, i) {
    return sum + i;
  });

  let thirdRoomVacancies = countThirdRoom.reduce(function (sum, i) {
    return sum + i;
  });

  return [firstRoomVacancies, secondRoomVacancies, thirdRoomVacancies];
}

const hotelsService = {
  getHotels,
  getRoomsVacancies,
};

export default hotelsService;
