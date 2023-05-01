import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import cookieParser from 'cookie-parser';
import Multer from 'multer';
import { v2 } from 'cloudinary';

// Routes
import businessRoutes from './routes/business';
import adsRoutes from './routes/ads';
import productRoutes from './routes/products';
import courseRoutes from './routes/couses';
import resourceRoutes from './routes/resources';
import userRoutes from './routes/user';
import normalizePort from './utils/normalizePort';
import uploadRoutes from './routes/upload';

const app = express();
const PORT = normalizePort(process.env.PORT || 4000);
app.set('port', PORT);
const server = http.createServer(app);

const cloudinary = v2;
// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/business', businessRoutes);
app.use('/ads', adsRoutes);
app.use('/products', productRoutes);
app.use('/courses', courseRoutes);
app.use('/resources', resourceRoutes);
app.use('/users', userRoutes);
app.use('/upload', uploadRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Edupora Server API');
});

// image upload API
app.post('/upload-image', (req: Request, res: Response) => {
  // collected image from a user
  const data = {
    image: req.body.image,
  };
  // upload image here
  cloudinary.uploader
    .upload(data.image, { folder: 'products' })
    // return response
    .then((result) => {
      res.status(200).send({
        message: 'success',
        result,
      });
    })
    // return error
    .catch((error) => {
      res.status(500).send({
        message: 'failure',
        error,
      });
    });
});

const errorHandler = (error: { syscall: string; code: any }) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === 'string' ? 'pipe ' + address : 'port: ' + PORT;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + PORT;
  console.log('App Listening on ' + bind);
});

server.listen(PORT);
