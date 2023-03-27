const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connection = (uri) => mongoose.connect(uri);

module.exports = connection;
