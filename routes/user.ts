import { Request, Response, Router } from 'express';
import userController from '../controllers/userController';

userController;

const userRoutes = Router();

userRoutes
  .post('/create', userController.createUser)
  .get('/', userController.index)
  .get('/:id', userController.findUniqueUser);

export default userRoutes;
