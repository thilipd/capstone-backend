const mongoose = require('mongoose');

const attachmentSchema = mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    thumbURL: {
        type: String,
        required: true
    },
    filetype: {
        type: String,
        required: true
    },
    filesize: {
        type: Number,
        required: true
    }
})

const attachmentModel = mongoose.model('attachments', attachmentSchema);

module.exports = attachmentModel;

