import { Router } from 'express';
import Multer from 'multer';
import { handleUpload } from '../controllers/uploadContoller';
import imageToB64 from '../utils/imageToB64';

const storage = Multer.memoryStorage();
const upload = Multer({
  storage,
});

const uploadRoutes = Router();

uploadRoutes.post('/', upload.single('my_file'), async (req, res) => {
  try {
    const cldRes = await handleUpload(imageToB64(req.file));
    res.json(cldRes);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
});

export default uploadRoutes;
