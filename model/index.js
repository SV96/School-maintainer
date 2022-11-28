const mongoose = require("mongoose");
const env = require("../helper");
const authCreate = require("./auth.model");
const accounts = require("./accounts.model");
mongoose.connect(`mongodb://localhost:27017/${env.dbName}`, (err) => {
  !err ? console.log(`Connected to db ${env.dbName}`) : console.log(err);
});

module.exports = { authCreate, accounts };
