const mongoose = require("mongoose");

const url =
  "mongodb+srv://shaikaziya:<password>@cluster0.bpnjhgc.mongodb.net/?retryWrites=true&w=majority";

//   "mongodb://shaikaziya:<password>@ac-cbn9ckv-shard-00-00.bpnjhgc.mongodb.net:27017,ac-cbn9ckv-shard-00-01.bpnjhgc.mongodb.net:27017,ac-cbn9ckv-shard-00-02.bpnjhgc.mongodb.net:27017/?ssl=true&replicaSet=atlas-3mox3d-shard-0&authSource=admin&retryWrites=true&w=majority"
module.exports.connect = () => {
  mongoose
    .connect(url, 
    //     {
    //   useNewUrlParser: true,
    //   // useFindAndModify: false,
    //   useUnifiedTopology: true,
    //   // useCreateIndex: true,
    // }
    )
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};


