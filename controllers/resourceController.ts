import { Request, Response } from 'express';
import prisma from '../services/prisma';
// import resourcesData from '../data/resources.json';

export const resourceController = {
  async index(req: Request, res: Response) {
    const resources = await prisma.resource.findMany();
    return res.json(resources);
  },
};
