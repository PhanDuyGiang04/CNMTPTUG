const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/homeRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRoutes);

// Health check cho Elastic Beanstalk
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});