import { getHotels, getRoomsByHotel } from '@/controllers';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken);

hotelsRouter.get('/', getHotels);
hotelsRouter.get('/rooms/:id', getRoomsByHotel);

export { hotelsRouter };
