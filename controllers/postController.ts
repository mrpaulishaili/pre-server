import { Request, Response } from 'express';
import prisma from '../services/prisma';

export const postController = {
  async index(req: Request, res: Response) {
    const posts = await prisma.resource.findMany();
    return res.json(posts);
  },
};
