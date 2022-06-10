const express = require('express');


const queryRouter = express.Router();


const Query = require('../model/queryModel');





queryRouter.post('/create', async (req, res) => {

    const count = await Query.countDocuments() + 1;

    const queryNo = `QN${count.toString().padStart(4, 0)}`;

    console.log(queryNo);



    const newQuery = new Query({
        topic: req.body.topic,
        subTopic: req.body.subTopic,
        perferedLanguage: req.body.language,
        queryTitle: req.body.queryTitle,
        description: req.body.description,
        availableTime: req.body.availableTime,
        usermail: req.body.usermail,
        createdTime: req.body.createdTime,
        createdDate: req.body.createdDate,
        queryNo: queryNo

    });
    console.log(req.body, newQuery);

    try {
        const query = await newQuery.save();
        return res.status(201).send('Query has been created')

    } catch (error) {
        res.status(400).send(error.message);
    }


})



queryRouter.post('/userQueries', async (req, res) => {

    let queryArray = []

    try {
        const queries = await Query.find({ usermail: req.body.usermail });
        queries.map((query) => {
            queryArray.push(query);
        })

        res.status(200).send(queryArray);

    } catch (error) {
        res.status(400).send(error.message);
    }

})


queryRouter.post('/singleQueries', async (req, res) => {
    try {
        const query = await Query.findOne({ queryNo: req.body.queryNo })
        res.status(200).send(query);

    } catch (error) {
        res.status(400).send(error.message);

    }
})


module.exports = queryRouter;

