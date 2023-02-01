import { getHotels, getRoomsByHotel, reserveRoom } from '@/controllers';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken);

hotelsRouter.get('/', getHotels);
hotelsRouter.get('/rooms/:id', getRoomsByHotel);
hotelsRouter.post('/room/:id', reserveRoom);

export { hotelsRouter };
