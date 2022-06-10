const express = require('express');

const upload = require('../helper/filehelper');

const singleFileUpload = require('../controllers/fileUploadController');

const attachmentRouter = express.Router();



attachmentRouter.post('/attachments', upload.any('file'), singleFileUpload);


module.exports = attachmentRouter;