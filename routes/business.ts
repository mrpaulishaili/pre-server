import { Request, Response, Router } from 'express';
import { businessController } from '../controllers/businessController';

const businessRoutes = Router();

businessRoutes.get('/', businessController.index);

businessRoutes.post('/', (req: Request, res: Response): void => {
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

export default businessRoutes;
