import { Router } from 'express';
import { courseController } from '../controllers/courseController';

const courseRoutes = Router();

courseRoutes.get('/', courseController.index);

export default courseRoutes;
