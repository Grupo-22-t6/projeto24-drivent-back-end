import { getHotelInfo, getRoomsByHotel, getRoomsVacancies } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { Router } from 'express';

const hotelsRouter = Router();

///hotelsRouter.all('/*', authenticateToken);

hotelsRouter.get('/', getHotelInfo);
hotelsRouter.get('/rooms', getRoomsVacancies);
hotelsRouter.get('/rooms/:id', getRoomsByHotel);

export { hotelsRouter };
