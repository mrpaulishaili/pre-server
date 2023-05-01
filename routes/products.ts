import { Request, Response, Router } from 'express';
import { productController } from '../controllers/productController';

const productRoutes = Router();

productRoutes
  .get('/', productController.index)
  .get('/:id', productController.uniqueProduct)
  .post('/', productController.addProduct)
  .put('/', productController.updateProduct);

export default productRoutes;
