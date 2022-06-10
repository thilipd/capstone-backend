const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config()

const bodyparser = require('body-parser');



const app = express();

const dbConfig = require('./shared/connect');

app.use(express.json());
app.use(cors());


app.use(bodyparser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


app.get('/', (req, res) => {
    res.send('Hello');
})

const authRoute = require('./routes/auth');
const queryRoute = require('./routes/query');
const attachmentRoute = require('./routes/fileUpload');


app.use('/register', authRoute);
app.use('/query', queryRoute);



const port = process.env.PORT || 9000;


app.listen(port, () => console.log(`app conneceted @ ${port}`))