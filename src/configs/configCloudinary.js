// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv')
dotenv.config()
// Return "https" URLs by setting secure: true
cloudinary.config({
    cloud_name: process.env.cloudinary_name,
    api_key: process.env.cloudinary_APIKEY,
    api_secret: process.env.cloudinary_APISecret,
});
// Log the configuration
module.exports = cloudinary