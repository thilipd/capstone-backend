const mongoose = require('mongoose');

const mongoURL = `mongodb+srv://thilip:Z7Kv8NN03DBsQbEE@cluster0.vaukj.mongodb.net/queryTicket?retryWrites=true&w=majority`;


mongoose.connect(mongoURL);

let connection = mongoose.connection

connection.on('error', () => {
    console.log('Mongo not connected')
})

connection.on('connected', () => {
    console.log('Mongo  connected')
})


module.exports = mongoose;