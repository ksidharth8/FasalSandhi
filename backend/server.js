const express = require("express");
const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// Sample Route to check if the server is running
app.get("/", (req, res) => {
	res.send("FasalSandhi Backend is running!");
});

// Server listens on port 5000
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

const sequelize = require("./config/database");

sequelize.sync().then(() => {
	console.log("Database synced");
});

const User = require('./models/User');

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced and User model created');
});
