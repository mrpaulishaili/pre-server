import { Request, Response, Router } from 'express';
import { adsController } from '../controllers/adsController';

const adsRoutes = Router();

adsRoutes.get('/', adsController.index);

adsRoutes.post('/', (req: Request, res: Response): void => {
  const { a, b } = req.body;

  if (a && b && typeof a === 'number' && typeof b === 'number') {
    res.json({
      success: true,
      message: a + b,
    });
  } else {
    res.json({
      success: false,
      message: 'Missing parameters',
    });
  }
});

export default adsRoutes;
