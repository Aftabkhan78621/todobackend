// mongoose imprt kiya
const mongoose = require("mongoose");

// aysnc func bnate h db connect krne k liye
const connectDB = async () => {
  try {
    //mongo db local url (ya atla bhi use kr skte h future m )
    const conn = await
     mongoose.connect("mongodb+srv://todoUser:todo123@cluster0.gmcnakj.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // agr conncet ho gya to yh chelega
    console.log(`mongo db conncet : ${conn.connection.host}`);
  } catch (error) {
    // agr errr aye to eorrr dikhao
    console.log("mongoDb eorrr:", error.message);
    process.exit(1);
  }
};

//is fxn ko export kr rhe h taki server.js m use ho
module.exports = connectDB;
