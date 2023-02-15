import { getHotels, getRoomsByHotel, reserveRoom, reserveVerification } from '@/controllers';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken);

hotelsRouter.get('/', getHotels);
hotelsRouter.get('/rooms/:id', getRoomsByHotel);
hotelsRouter.post('/room/:id', reserveRoom);
hotelsRouter.get('/reserve', reserveVerification);

export { hotelsRouter };
