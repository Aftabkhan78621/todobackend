// mongoosse import kr rhe h taki schema bna ske
const mongoose = require("mongoose")

// ek schema bna rhe h jo todo ka format define krega
const TodoSchema = new mongoose.Schema({
    // task ka name ya msg
    title:{
        type:String, // string hona chiye
        required : true, // yhfield required hai
        trim : true, // extra space hta dega
    },
    // complete hua ya nhi (by defualt false)
    isCompleted:{
        type:Boolean, // true/false
        default: false // default value false rkhi h 
    },
    // kb create hua -- automatic set hoga
    createdAt:{
        type:Date,
        default:Date.now // abhi ka time set krega
    }
});

// mongoosr model bna k export kr rhe h 
// todo name ka model bnega, jo schema follow krega

module.exports = mongoose.model("Todo",TodoSchema)