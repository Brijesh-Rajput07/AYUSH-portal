// Import mongoose
const mongoose = require('mongoose');

// Define schema for User Profile
const userProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // This references the User model
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        default: '',
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
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    interests: [String], // An array of user interests/hobbies
    socialMedia: {
        website: String,
        twitter: String,
        facebook: String,
        linkedin: String,
        github: String,
    },
    avatar: {
        type: String, // URL to the user's profile picture
        default: 'default-avatar.png', // You can set a default image
    },
});

// Create the User Profile model
module.exports = mongoose.model('UserProfile', userProfileSchema);

