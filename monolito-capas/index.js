const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
const studentRoutes = require("./routes/students");
app.use("/students", studentRoutes);
const courseRoutes = require("./routes/courses");
app.use("/courses", courseRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Bienvenido al sistema de gestión Académica");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} 🚀`);
});
