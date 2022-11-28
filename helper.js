require("dotenv").config();

const nodePort = process.env.PORT;
const singUpSecret = process.env.SUPERUSERPASSOWRD;
const dbName = process.env.MONGOOSENAME;
const jwtSecret = process.env.JWTSECRET;

module.exports = { nodePort, singUpSecret, dbName, jwtSecret };
