const mongoose = require("mongoose");
const re = require("../constants").re;

var StaffInfo = new mongoose.Schema({
  name: {
    type: String,
    required: "Required",
    trim: true,
    validate: {
      validator: (val) => re.isAlpha.test(val),
      message: "No special characters allowed",
    },
  },
  contactNo: {
    type: Number,
    required: "Required",
    trim: true,
    validate: {
      validator: (val) => re.isMobileNum.test(val.toString()),
      message: "Not a valid contact number",
    },
  },
  address: {
    type: String,
    required: "Required",
    trim: true,
    min: [4, "must me atlest 4 characters, got {value}"],
    max: [30, "must me lesser 30 characters, got {value}"],
    validate: {
      validator: (val) => re.isAlphaNum.test(val),
      message: "No special characters allowed",
    },
  },
  expYears: {
    type: Number,
    required: "Required",
    trim: true,
  },
  income: {
    type: Number,
    required: "Required",
    trim: true,
  },
  designation: {
    type: String,
    required: "Required",
    enum: ["Admin", "Teacher", "Transporter", "Hr"],
  },
  specialization: [
    {
      type: String,
      validate: {
        validator: (val) => re.isAlpha.test(val),
        message: "No special characters allowed",
      },
    },
  ],
});

module.exports = mongoose.model("staffInfo", StaffInfo);
