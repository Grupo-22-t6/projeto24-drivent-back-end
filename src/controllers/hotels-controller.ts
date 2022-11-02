import hotelsService from '@/services/hotels-service';
import { Response, Request } from 'express';
import httpStatus from 'http-status';

export async function getHotelInfo(req: Request, res: Response) {
  const hotels = await hotelsService.getHotels();

  res.status(httpStatus.CREATED).json(hotels);
}
