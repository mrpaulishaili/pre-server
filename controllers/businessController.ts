import { Request, Response } from 'express';
import prisma from '../services/prisma';

export const businessController = {
  async index(req: Request, res: Response) {
    const businesses = await prisma.business.findMany();
    return res.json(businesses);
  },
};
