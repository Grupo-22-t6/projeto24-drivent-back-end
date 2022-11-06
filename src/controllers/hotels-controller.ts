import { AuthenticatedRequest } from '@/middlewares';
import hotelsService from '@/services/hotels-service';
import { Response, Request } from 'express';
import httpStatus from 'http-status';

export async function getHotels(req: Request, res: Response) {
  const hotels = await hotelsService.getHotels();

  res.status(httpStatus.CREATED).json(hotels);
}

export async function getRoomsByHotel(req: Request, res: Response) {
  const hotelId = Number(req.params.id);
  const rooms = await hotelsService.getRoomsByHotel(hotelId);
  res.status(httpStatus.OK).json(rooms);
}

export async function reserveRoom(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  res.status(httpStatus.OK).json();
}
