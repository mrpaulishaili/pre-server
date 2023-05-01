import { Request, Response } from 'express';
import prisma from '../services/prisma';

export const productController = {
  async index(req: Request, res: Response) {
    const products = await prisma.product.findMany();
    return res.json(products);
  },

  async uniqueProduct(req: Request, res: Response) {
    const paramId = req.params.id;

    const product = await prisma.product.findUnique({ where: { id: paramId } });

    return res.json({ product: product });
  },

  async addProduct(req: Request, res: Response) {
    const { name, description, imgUrl, price } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        imgUrl,
        price,
      },
    });

    return res.json({ product: product });
  },

  async updateProduct(req: Request, res: Response) {
    const { name, description, imgUrl, price } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        imgUrl,
        price,
      },
    });

    return res.json({ product: product });
  },
};
