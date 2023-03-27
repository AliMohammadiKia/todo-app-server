const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connection = require("./src/db/connection");
const todosRoute = require("./src/routes/todosRoute");

dotenv.config();
const server = express();
const port = process.env.SERVER_PORT || 5000;

server.use(express.json());
server.use(cors());
server.use("/todos", todosRoute);

const setup = async () => {
  try {
    await connection(process.env.MONGODB_URI);
    console.log("database is connected");
    server.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

setup();
