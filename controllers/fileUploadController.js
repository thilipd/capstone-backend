
const attachmentModel = require('../model/attachmentModel');


const singleFileUpload = async (req, res) => {
    try {
        const file = new attachmentModel({ body: req.body });
        console.log(req.body);
        await file.save();
        res.status(200).send('File uploaded successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = singleFileUpload;