const express = require('express');
const router = express.Router();
const {videoUpload} =require("../Controller/YtVideoUpload")
const {getEdAllDetail,getCardEdAllDetail,UpdateCardEdAllDetail} = require("../Controller/Profile")
const {getTaskData}= require("../Controller/YtData");
const {auth,isEditor,isYouTuber}= require("../Middleware/Auth");

router.get("/getEdAllDetail",getEdAllDetail)
router.post("/getCardEdAllDetail",getCardEdAllDetail)
router.post("/UpdateCardEdAllDetail",UpdateCardEdAllDetail)
router.post("/videoUpload",auth,videoUpload)
router.post("/getTaskData",auth,getTaskData)

module.exports = router;