import { getHotelInfo } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { Router } from 'express';

const hotelsRouter = Router();

///hotelsRouter.all('/*', authenticateToken);

hotelsRouter.get('/', getHotelInfo);

export { hotelsRouter };
