interface ImageFileSrc {
  buffer: Buffer;
  mimetype: string;
}

export default function imageToB64(imageFileSrc: ImageFileSrc) {
  const b64 = Buffer.from(imageFileSrc.buffer).toString('base64');
  let dataURI = 'data:' + imageFileSrc.mimetype + ';base64,' + b64;

  return dataURI;
}
