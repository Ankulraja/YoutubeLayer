
const cloudinary= require('cloudinary').v2;

const cloudinaryConnect = async (req, res) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
    console.log("cloudConnect successfully");
  } catch (err) {
    console.log(err);
    console.log("Not Connected With Cloudinary");
  }
};

module.exports = cloudinaryConnect;

