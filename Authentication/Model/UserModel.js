const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: [6, 'Password must be at least 6 characters'],
        },
        number: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const User = mongoose.model('User', userSchema);
module.exports = User;
