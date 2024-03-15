
const cloudinary= require('cloudinary').v2;


const uploadFile= async(file, folder,quality)=> {
  try{
    const option = { folder };
    option.resource_type="auto";
    if(quality){
      option.quality = quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath, option);
  }

  catch(err){
    console.error("Error in uploading");
    console.error(err);
    fs.unlinkSync(file.tempFilePath);
  }
  }
    

module.exports= uploadFile;
