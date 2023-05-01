import { Request, Response } from 'express';
import prisma from '../services/prisma';

export const courseController = {
  async index(req: Request, res: Response) {
    const courses = await prisma.course.findMany();
    return res.json(courses);
  },
};
