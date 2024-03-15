const mongoose = require("mongoose");

const YtSchema = new mongoose.Schema({
  ytVidName: {
    type: String,
  },
  ytfileUrl: {
    type: String,
  },
  ytCategory: {
    type: String,
  },
  ytVidDescription: {
    type: String,
  },
  userId: {
    type: String,
  },
  status: {
    type: String,
    default: "All",
    enum: ["All", "Pending", "Assigned", "Done", "Requested"],
  },
  requestedMail: [
    {
      type: String,
    },
  ],
  assignEmail: 
    {
      type: String,
    },
  assignStatus: 
    {
      type: String,
      enum: ["Assigned","NotAssigned"],
      default:"NotAssigned"
    },
    editedVideoList:[{
      type: String,
    }]
  
});

module.exports = mongoose.model("YtSchema", YtSchema);
