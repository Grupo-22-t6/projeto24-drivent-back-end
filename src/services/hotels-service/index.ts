import { notFoundError } from '@/errors';
import hotelsRepository from '@/repositories/hotels-repository';

async function getHotels() {
  const hotels = await hotelsRepository.getHotels();
  if (!hotels) throw notFoundError();
  return hotels;
}

async function getRoomsVacancies() {
  return;
}

const hotelsService = {
  getHotels,
  getRoomsVacancies,
};

export default hotelsService;
