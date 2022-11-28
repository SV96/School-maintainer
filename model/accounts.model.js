const mongoose = require("mongoose");
const re = require("../constants").re;

var accountsSchema = new mongoose.Schema({
  accountDepartment: {
    type: String,
    required: "Required",
    enum: ["student", "staff", "stationary", "tranportation", "misellenious"],
  },
  date: {
    type: Date,
    default: Date.now,
    required: "Required",
  },
  amountFlow: {
    type: String,
    required: "Required",
    enum: ["in", "out"],
  },
  amount: {
    type: Number,
    required: "Required",
  },
  notes: {
    type: String,
    min: [10, "must me atlest 10 characters, got {value}"],
    max: 20,
    validate: {
      validator: (val) => re.isAlpha.test(val),
      message: "No special characters allowed",
    },
    trim: true,
  },
  vendorName: {
    type: String,
    min: [5, "must me atlest 5 characters, got {value}"],
    max: 20,
    required: function () {
      return this.amountFlow === "out";
    },
  },
  studentName: {
    type: String,
    required: function () {
      return this.accountDepartment === "student";
    },
    min: 4,
    max: 20,
    validate: {
      validator: (val) => re.isAlpha.test(val),
      message: "No special characters allowed",
    },
  },
  studentStandard: {
    type: String,
    required: function () {
      return this.accountDepartment === "student";
    },
    min: 4,
    max: 20,
    validate: {
      validator: (val) => re.isAlphaNum.test(val),
      message: "No special characters allowed",
    },
  },
  studentGrNo: {
    type: String,
    required: function () {
      return this.accountDepartment === "student";
    },
    min: 4,
    max: 20,
    validate: {
      validator: (val) => re.isAlphaNum.test(val),
      message: "No special characters allowed",
    },
  },
  reciptNo: {
    type: String,
    required: "Required",
    min: 4,
    max: 20,
    validate: {
      validator: (val) => re.isAlphaNum.test(val),
      message: "No special characters allowed",
    },
  },
});

module.exports = mongoose.model("accounts", accountsSchema);
