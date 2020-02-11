const multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/products/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

var products = multer({ storage: storage });
module.exports = products;

