const User =require("../Model/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
require('dotenv').config()

exports.signup=async(req,res)=>{                       
  try{
      const {firstName,lastName,email,password,confirmPassword,accountType} = req.body;
      if(!firstName || !lastName || !email || !password || !confirmPassword || !accountType){
        return res.status(404).json({
            success: false,
            message:"Fill Are require fields"
        })
      }

      if(password !== confirmPassword){
        return res.status(404).json({
            success: false,
            message:"Password Not Match"
        })
      }
      const existingUser = await User.findOne({ email});
    
      if(existingUser){
        return res.status(400).json({
            success: false,
            message:"User already exists"
        })
      }  
      console.log(password);
      const hashPassword = await bcrypt.hash(password,10)
      if(!hashPassword){
        return res.status(400).json({
            success: false,
            message:"Hashing the password failed"
        })
      }
      console.log(hashPassword);
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password:hashPassword,
        accountType,
        image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`
      });
      
      const existUser = await User.findOne({ email });

      const payload = {
        email: existUser.email,
        accountType: existUser.accountType,
        id: existUser._id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      existUser.token = token;
      existUser.password = undefined;
  
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res.cookie("token", token, options).status(200).json({
        success: true,
        message: 'Login successful',
        token,
        existUser,
      });

      
  }
  catch(e){
    return res.status(400).json({
        success: false,
        message:"Error in SignUp"
    })     
  }
}




exports.login=async(req,res)=>{                        
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(404).json({
          success: false,
          message: "Email or Password empty"
        });
      }
  
      const existUser = await User.findOne({ email });
      if (!existUser) {
        return res.status(400).json({
          success: false,
          message: 'Email not registered',
        });
      }
  


      if (!await bcrypt.compare(password, existUser.password)) {
        return res.status(404).json({
          success: false,
          message: 'Password is incorrect',
        });
      }


  
      const payload = {
        email: existUser.email,
        accountType: existUser.accountType,
        id: existUser._id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
  
  
      existUser.token = token;
      existUser.password = undefined;
  
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res.cookie("token", token, options).status(200).json({
        success: true,
        message: 'Login successful',
        token,
        existUser,
      });
    } catch (e) {
      console.log(e.message)
      return res.status(500).json({
        success: false,
        message: 'Login Failure, please try again',
      });
    }
};