const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

mongoose.model('User', UserSchema, 'collectionUser');
