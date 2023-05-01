import { v2 } from 'cloudinary';

const cloudinary = v2;

export async function handleUpload(file: any, folder: string = 'uploads') {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
    folder: folder,
  });
  return res;
}
