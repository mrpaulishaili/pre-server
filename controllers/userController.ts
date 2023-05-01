import { Request, Response } from 'express';
import prisma from '../services/prisma';
import cookieToken from '../utils/cookieToken';

const userController = {
  // All Users

  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany({
      where: { password: '' },
    });
    return res.json(users);
  },

  // Create User

  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    cookieToken(user, res);
  },

  // Login User

  async loginUser(req: Request, res: Response, next: any) {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: email,
    });

    return res.json({ user: user });
  },

  // Update user

  async updateUser(req: Request, res: Response) {
    const paramId = req.params.id;

    const updatedUser = await prisma.user.update({
      data: {},
      where: { id: paramId },
    });

    return res.json({ updatedUser: updatedUser });
  },

  // Get a User

  async findUniqueUser(req: Request, res: Response) {
    const paramId = req.params.id;

    const uniqueUser = await prisma.user.findUnique({
      where: { id: paramId },
    });

    return res.json({ uniqueUser: uniqueUser });
  },
};

export default userController;
