import hotelsService from '@/services/hotels-service';
import { Response, Request } from 'express';
import httpStatus from 'http-status';

export async function getHotels(req: Request, res: Response) {
  const hotels = await hotelsService.getHotels();

  res.status(httpStatus.CREATED).json(hotels);
}

export async function getRoomsByHotel(req: Request, res: Response) {
  res.status(httpStatus.OK).json();
}
