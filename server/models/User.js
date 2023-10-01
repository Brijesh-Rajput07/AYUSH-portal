// Import mongoose
const mongoose = require('mongoose');

// Define schema for User
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Define user roles as needed
        default: 'user',
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    },
    // Custom Profile Fields
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        postalCode: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    interests: [String],
    socialMedia: {
        website: {
            type: String,
        },
        twitter: {
            type: String,
        },
        facebook: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        github: {
            type: String,
        },
    },
    avatar: {
        type: String,
        default: 'default-avatar.png',
    },
    token: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },

});

module.exports = mongoose.model('User', userSchema);
