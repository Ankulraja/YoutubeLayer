
const YtSchema = require("../Model/YtSchema");
exports.getTaskData= async(req,res)=>{
    try{
        console.log("getTaskData Start");
        let data=[];
        const {id}=req.user;
        const {status,assignEmail}=req.body;
        console.log("Inside GetTaskData",status);
        console.log("Inside GetTaskData",assignEmail);
        console.log("Inside GetTaskData",id);


        const response = await YtSchema.findOneAndUpdate(
            {userId:id},
            { $set: { assignEmail: assignEmail }, $pull: { requestedMail: assignEmail } },
            { new: true }
          );
        // console.log(response);
       
        // if(status === 'Requested'){
        //     console.log("Here is it ")
        //     data = await YtSchema.find({
        //         userId: id,
        //         status: status,
        //         // requestedMail: { $ne: "" },
        //         // requestedMail: { $ne: null }, 
        //         // requestedMail: { $ne: undefined } 
        //         requestedMail: { $exists: true, $not: { $size: 0 } }
        //     });
           
        // } 
        // else{
        //     data = await YtSchema.find({userId:id,status:status});
        // }  
        if (status === "Cancel"){
            console.log("Hello")
        }

        
        data = await YtSchema.find({userId:id,status:status});


        console.log("2nd",data);    
    
        return res.status(200).json({
            success:true,
            data,
            message:"Video Upload Data Found"
        })
    }catch(e){
        console.log(e.message);
        return res.status(500).json({
            success:false,
            message:"Upload Video Data Not Found"
        })
    }
}
