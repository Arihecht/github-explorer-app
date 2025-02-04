const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const githubRoutes = require("./routes/githubRoutes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/github", githubRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;





