const mongoose = require('mongoose');

const User = mongoose.model('User');

const createUser = async (req, res) => {
    try {
        const { name, age, password } = req.body;

        if(name.length <= 2)
            return res.status(400).json({
                msg: 'Error',
                data: 'Name too short',
            })

        const usersFounded = await User.find();

        const userValidator = usersFounded.some( (item) => {
            return item.name === name;
        })

        if(userValidator)
            return res.status(400).json({
                msg: 'Error',
                data: 'User already existed',
            });
        
        const userObj = {
            name,
            age,
            password,
        }

        const newUser = new User( userObj );

        const answer = await newUser.save();

        return res.status(201).json({
            msg: 'User Created',
            data: answer,
        })

    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            data: e.message,
        })
    }

}

const removeUser = async (req, res) => {
    try {
        const { id } = req.params;

        const answer = await User.findByIdAndDelete(id);

        return res.status(200).json({
            msg: 'User removed',
            data: answer,
        })
    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            data: e.message,
        })
    }
}

module.exports = {
    createUser,
    removeUser,
}