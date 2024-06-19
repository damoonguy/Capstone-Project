const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const blogsRoutes = require("./routes/blogs");
const categoriesRoutes = require("./routes/categories");
const authRoutes = require("./routes/auth");

const connectDB = require("./database/db");

connectDB();

const port = process.env.PORT;



const app = express();


app.use(cors()); // Enables CORS from any unknown origin

// Enabling the use of JSON for the body of the request
app.use(express.json());


app.use("/api/blogs", blogsRoutes); 
app.use("/api/categories", categoriesRoutes);
app.use("/api/auth", authRoutes);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

 