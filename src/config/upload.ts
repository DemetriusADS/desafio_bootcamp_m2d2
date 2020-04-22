import path from 'path';
import multer from 'multer';

const fileFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: fileFolder,

  storage: multer.diskStorage({
    destination: fileFolder,
    filename(request, file, callback) {
      const fileName = `${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
