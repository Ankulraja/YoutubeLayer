const express= require('express');
const app = express();
const dbConnect =require("./Config/Database")
const cloudinaryConnect = require("./Config/Cloudinary");
const userRoute = require("./Route/UserRouter")
const YtRoute = require("./Route/YtRouter");
const EdRoute = require("./Route/EdRoute");
const UploadToYouTube = require("./Route/UploadToYoutube");
const port =process.env.PORT || 3000;
const fileUpload = require("express-fileupload");
const youtube = require("youtube-api");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const creadentials = require("./credentials.json");

app.use(cors());
app.use(express.json());

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );


  
app.use("/api/v1",userRoute);
app.use("/api/v1",YtRoute);
app.use("/api/v1",EdRoute);
app.use("/api/v1",UploadToYouTube);

const oAuth = youtube.authenticate({
  type: "oauth",
  client_id: creadentials.web.client_id,
  client_secret: creadentials.web.client_secret,
  redirect_url: creadentials.web.redirect_uris[0],
});

dbConnect();
cloudinaryConnect();

app.get("/google/callback", function (req, res) {
  const { filename, title, description } = JSON.parse(req.query.state);
  oAuth.getToken(req.query.code, (err, tokens) => {
    if (err) throw err;
    oAuth.setCredentials(tokens);
    youtube.videos.insert(
      {
        resource: {
          snippet: {
            title: title,
            description: description,
          },
          status: {
            privacyStatus: "private",
          },
        },
        part: "snippet,status",
        media: {
          body: fs.createReadStream(filename),
        },
      },
      (err, data) => {
        if (err) {
          console.error("Error uploading video:", err);
          res.status(500).send("Error uploading video to YouTube");
          
        } else {
          console.log("Video uploaded successfully");
          res.redirect("http://localhost:3000/Success");
        }
      }
    );
  });
});

app.listen(port,()=>{
    console.log('listening on port',port);
});