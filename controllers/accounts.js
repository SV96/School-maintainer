const accountsSchema = require("../model/accounts.model");
const utils = require("../utils");
// API for makeing entires in accounts

const accountsEntries = async (req, res, next) => {
  try {
    const formData = req.body;
    const reciptNo = utils.createReciptNumber(
      req?.body?.accountDepartment,
      req?.body?.studentStandard || "",
      req?.body?.studentGrNo || ""
    );
    formData["reciptNo"] = reciptNo;
    const createAccountEntries = new accountsSchema(formData);
    await createAccountEntries.save();
    res.send("Enrty added");
  } catch (err) {
    res.send(err.toString());
  }
};

module.exports = { accountsEntries };
