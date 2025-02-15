const mongoose = require("mongoose");

const connection = mongoose.createConnection(`mongodb://${process.env.MONGO_URI}`);

connection.on('connected', () => {
  console.log('Connected to mongodb');
});

connection.on('disconnected', () => {
  console.log('Connection disconnected');
});

// mongoose.connect(`mongodb://${process.env.MONGO_URI}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   });
