import { Request, Response, Router } from 'express';
import { postController } from '../controllers/postController';

const postRoutes = Router();

postRoutes.get('/', postController.index);

postRoutes.post('/', (req: Request, res: Response): void => {
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

export default postRoutes;
