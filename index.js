import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.config.js";
// import { createAdmin } from "./config/createAdmin.js";

const PORT = process.env.PORT || 8276;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
  })
  .catch((err) => console.log("Server Error", err));
