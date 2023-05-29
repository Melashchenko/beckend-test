const mongoose = require("mongoose");

const app = require("./app");

// NtAe5AxKE76MnQHf;

const DB_HOST =
  "mongodb+srv://Tolik2023:NtAe5AxKE76MnQHf@cluster0.6uflqwo.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(
    app.listen(3000, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
