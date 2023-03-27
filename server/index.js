const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const port = 5000;

connectDb();
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/post", postRoutes);

app.get("/api/test", (req, res) => {
  res.json({
    message: "Hello world",
    qty: 10,
    arr: ["potato", "tomato", "banana"],
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
