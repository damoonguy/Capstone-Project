const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const blogsRoutes = require("./routes/blogs");
const categoriesRoutes = require("./routes/categories");

app.use(cors()); // Enables CORS from any unknown origin

// Enabling the use of JSON for the body of the request
app.use(express.json());


app.use("/api/blogs/", blogsRoutes); 
app.use("/api/categories/", categoriesRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

