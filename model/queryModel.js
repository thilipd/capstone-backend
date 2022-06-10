const mongoose = require('mongoose');


const querySchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    subTopic: {
        type: String,
        required: false
    },
    perferedLanguage: {
        type: String,
        required: true
    },
    queryTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    availableTime: {
        type: Array,
        required: true
    },
    queryNo: {
        type: String,
        required: true
    },
    usermail: {
        type: String,
        required: true
    },
    createdDate: {
        type: String,
        required: true
    },
    createdTime: {
        type: String,
        required: true
    }

})


const queryModel = mongoose.model('queries', querySchema);

module.exports = queryModel;