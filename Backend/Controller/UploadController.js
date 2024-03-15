const open = require("opn");
const youtube = require("youtube-api");
const creadentials = require("../credentials.json");
const express = require("express");
const app = express();
const oAuth = youtube.authenticate({
  type: "oauth",
  client_id: creadentials.web.client_id,
  client_secret: creadentials.web.client_secret,
  redirect_url: creadentials.web.redirect_uris[0],
});

exports.upload = async (req, res,next) => {
  try{
    const {videoFile}= req.files;
    console.log(videoFile);
    console.log("5. Handling /upload POST request");
    console.log(videoFile.tempFilePath);

    if (req.files) {
      console.log("6. File uploaded successfully");
      const filename = videoFile.tempFilePath;
      console.log("fileName: " + filename);
      const { title, description } = req.body;
  
      open(
        oAuth.generateAuthUrl({
          access_type: "offline",
          scope: "https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/userinfo.profile",
          state: JSON.stringify({
            filename,
            title,
            description,
          }),
        })
      );
      
      console.log("7. OAuth URL generated and opened");
      return res.status(200).json({
        success: true,
        message:"Successfully Upload"
      })
    }
  }
  catch(err){
    return res.status(500).json({
      success: false,
      message:"Error in uploading"
    })
  }
};