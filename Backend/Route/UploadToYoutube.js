const express = require("express");
const router = express.Router();
const { upload } = require("../Controller/UploadController");
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: "./",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

console.log("3. Storage initialized");

const uploadVideoFile = multer({ storage: Storage }).single("videoFile");

// router.post("/upload", uploadVideoFile, upload);
router.post("/upload",upload);
// router.post("/upload", (req,res)=>{
//     console.log("Ha AA Raha")
//     const {videoFile}= req.files;
//     console.log(videoFile);
// });


module.exports = router;
