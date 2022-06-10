const express = require('express');

const authRouter = express.Router();

const User = require('../model/usersModel');



authRouter.post('/signup', async (req, res) => {



    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })

    const search = await User.findOne({ email: req.body.email })

    if (!search) {
        try {

            await newUser.save();
            res.status(200).send(`You have sigined in with ${req.body.email}`)

        } catch (error) {

            res.status(400).send(error.message)

        }

    } else {
        res.send('This email is registered already, Please login')
    }


})

authRouter.post('/login', async (req, res) => {



    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password })

        if (user) {
            res.send(user);
        } else {
            res.send('Not a registerd user Please signUp')

        }

    } catch (error) {
        res.status(400).send(err)
    }

});


module.exports = authRouter;