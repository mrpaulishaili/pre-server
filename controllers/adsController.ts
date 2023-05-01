import { Request, Response } from 'express';
import prisma from '../services/prisma';

export const adsController = {
  async index(req: Request, res: Response) {
    const ads = await prisma.advertisement.findMany();
    return res.json(ads);
  },
};
