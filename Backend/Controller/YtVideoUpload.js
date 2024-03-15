const YtSchema = require("../Model/YtSchema");
const uploadFile = require("../Utility/Upload");

exports.videoUpload = async (req, res) => {
  try {
    const { ytfileUrl } = req.files;
    const { ytVidName, ytVidDescription, ytCategory } = req.body;
    const {id} =req.user;
    
    const response = await uploadFile(ytfileUrl, "YoutubeLayer");


    const result = await YtSchema.create({
      ytVidName,
      ytVidDescription,
      ytCategory,
      ytfileUrl: response.secure_url,
      userId:id
    });
     console.log("video uploaded full run")
    return res.status(200).json({
      success: true,
      message: "Video successfully uploaded",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong uploading",
    });
  }
};
