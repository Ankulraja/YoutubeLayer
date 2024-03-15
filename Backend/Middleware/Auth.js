const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../Model/User");

exports.auth = async (req, res, next) => {
  try {
    // const token =
    //   req.body.token ||
    //   req.cookies.token ||
    //   req.header("Authorization").replace("Bearer ", "");

    const { token } = req.body;

    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Token is Missing",
      });
    }

    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    if (!payload) {
      return res.status(403).json({
        success: false,
        message: "Unauthenticate Person",
      });
    }

    req.user = payload;
    console.log("Auth Full Run");

    next();
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Authentication Process Failed",
    });
  }
};

//isYouTuber

exports.isYouTuber = async (req, res, next) => {
  try {
    const role = req.user.accountType;
    if (role !== "YouTuber") {
      return res.status(401).json({
        success: false,
        message: "This Portal Only For YouTuber",
      });
    }
    next();
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Error in Verification of YouTuber Portal",
    });
  }
};

// isEditor

exports.isEditor = async (req, res, next) => {
  try {
    const role = req.user.accountType;
    if (role !== "Editor") {
      return res.status(401).json({
        success: false,
        message: "This Portal Only For Editor",
      });
    }
    next();
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Error in Verification of Editor Portal",
    });
  }
};
