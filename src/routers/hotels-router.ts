import { getHotels, getRoomsByHotel, reserveRoom, reserveVerification, updateReserve } from '@/controllers';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken);

hotelsRouter.get('/', getHotels);
hotelsRouter.get('/rooms/:id', getRoomsByHotel);
hotelsRouter.post('/room/:id', reserveRoom);
hotelsRouter.get('/reserve', reserveVerification);
hotelsRouter.put('/room/:id', updateReserve);

export { hotelsRouter };
