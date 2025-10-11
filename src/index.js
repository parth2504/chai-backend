import "dotenv/config";
import connectDB from "./db/index.js";

console.log("MONGODB_URI:", process.env.MONGODB_URI);

connectDB();

// import express from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("Error:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.error("ERROR:", error);
//     throw error;
//   }
// })();
