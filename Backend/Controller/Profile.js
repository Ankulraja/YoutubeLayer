const { response } = require("express");
const User = require("../Model/User");
const YtSchema = require("../Model/YtSchema");

exports.getEdAllDetail = async (req, res) => {
  try {
    // console.log("1");
    const allEditor = await User.find({ accountType: "Editor" });
    if (!allEditor) {
      return res.status(400).json({
        success: false,
        message: "Data not found",
      });
    }
    // console.log("2");

    return res.status(200).json({
      success: true,
      message: "All Data Fetch",
      allEditor,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Data Fetch Error",
    });
  }
};

exports.getCardEdAllDetail = async (req, res) => {
  try {
    
    const { email } = req.body;
    console.log("Gwalior");
    const reqEditor = await User.find({ email: email });
    return res.status(200).json({
      success: false,
      reqEditor,
      message: "Data Fetch Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Data Fetch Error",
    });
  }
};

exports.UpdateCardEdAllDetail = async (req, res) => {
  try {
    const { email, cardId, option } = req.body;
    // console.log("Inside UpdateCardEdAllDetail ", email);
    // console.log("Inside UpdateCardEdAllDetail ", cardId);
    // console.log("Inside UpdateCardEdAllDetail ", option);
    const response = await YtSchema.findByIdAndUpdate(
      cardId,
      {
        $pull: {
          requestedMail: email,
        },
        
        
      },
      { new: true }
    );
    if (option === "Assigned") {
      const response = await YtSchema.findByIdAndUpdate(
        cardId,
        { assignEmail: email , assignStatus:option , status:option ,requestedMail:[]},
        { new: true }
      );
    }
    console.log(response)
    return res.status(200).json({
      success: true,
      message: "Response Found",
    });
  } catch (err) {
    console.log("error in UpdateCardEdAllDetail ", err);
    return res.status(500).json({
      success: false,
      message: "Data Fetch Error In UpdateCardEdAllDetail ",
    });
  }
};

exports.getYtAllDetail = async (req, res) => {
  try {
    const allYoutuber = await User.find({ accountType: "YouTuber" });
    if (!allYoutuber) {
      return res.status(400).json({
        success: false,
        message: "Data not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "All Data Fetch",
      allYoutuber,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Data Fetch Error",
    });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const { userId } = req.body;

    const data = await User.findById(userId);

    return res.status(200).json({
      success: true,
      data,
      message: "User data retrieved successfully",
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "User data not retrieved ",
    });
  }
};

exports.updateInCard = async (req, res) => {
  try {
    const { newStatus, CardId } = req.body;
    const { email, id } = req.user;
    console.log(email);
    console.log(id);
    console.log(newStatus);
    if(newStatus === "Cancel"){
      console.log("Inside Cancle 1")
      const response = await YtSchema.findByIdAndUpdate(CardId,
         { status: "All" , assignEmail:null ,assignStatus:"NotAssigned"},
         {new:true} );
      console.log("Inside Cancle 2")
         console.log(response);
    }
    else{
      if (newStatus === "Requested") {
        console.log("0");
        let update = await YtSchema.findById(CardId);
        if (!update) {
          return res.status(400).json({
            success: false,
            message: "Couldn't find Module",
          });
        }
        console.log("0.11")
      //   if (!update.requestedMail) {
      //     update.requestedMail = [];
      // }
        update.requestedMail.push(email);
        console.log("1")
        update = await update.save();
        console.log("2")
        const response = await YtSchema.findByIdAndUpdate(
          CardId,
          { status: newStatus },
          { new: true }
        );
        // console.log("3")
      } else {
        console.log("Else else")
        const response = await YtSchema.findByIdAndUpdate(
          CardId,
  
          { $pull: { requestedMail: email }, status: newStatus },
          { new: true }
        );
      }
    }
    

    return res.status(200).json({
      success: true,
      response,
      message: "Card data updated successfully",
    });
  } catch (err) {
    console.log("Error updating", err);
    return res.status(200).json({
      success: false,
      message: "Card data Not updated",
    });
  }
};

exports.getCardDetail= async function(req, res) {
  try{
  
    const {ytId}=req.body;
    console.log("GET CARD DETAIL")
    const result = await YtSchema.findById(ytId);
    
    return res.status(200).json({
      success: true,
      message: "Card found",
      result
    });
  }catch(e){
    return res.status(500).json({
      success: false,
      message: "Card not found",
    });
  }
}