const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const constants = require('../constants/index');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'serenityandskill',
    api_key: process.env.CLOUDINARY_API_KEY || '737743264328395',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'cFllmLYfWR7ID4TFstcCkxPqkqQ'
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: constants.folderName.PROBLEM_IMAGES,
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const imageParser = multer({ storage: storage });


module.exports = imageParser;