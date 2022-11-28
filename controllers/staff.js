const staffAddSchema = require("../model/staffInfo.model");
const staffCaricullamchema = require("../model/staffCaricullan.model");

const staffAdd = async (req, res, next) => {
  try {
    const formData = req.body;
    const createStaff = new staffAddSchema(formData);
    await createStaff.save();
    res.send("Staff added");
  } catch (error) {
    res.send(error.toString());
  }
};

const staffCaricullamAdd = async (req,res,next) =>{
  try {
    const formData = req.body;
    const createStaff = new staffCaricullamchema(formData);
    await createStaff.save();
    res.send("Staff caricullam added");
  } catch (error) {
    res.send(error.toString());
  }

} 

module.exports = { staffAdd, staffCaricullamAdd };
