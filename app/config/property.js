const multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/property/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

var property = multer({ storage: storage });
module.exports = property;

