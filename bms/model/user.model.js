import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{type:String},
    email  : {type:String},
    pass : {type:String},
    cpass: {type:String},

})

export default mongoose.model.user||mongoose.model('user',userSchema)