import { Request, Response, Router } from 'express';
import { resourceController } from '../controllers/resourceController';

const resourceRoutes = Router();

resourceRoutes.get('/', resourceController.index);

export default resourceRoutes;
