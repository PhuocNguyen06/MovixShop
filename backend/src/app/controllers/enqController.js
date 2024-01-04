const Enquiry = require("../models/enqModel");
const validateMongoDbId = require("../utils/validateMongoDbId");
const asynHandler = require("express-async-handler");

//create a new Enqiry
const createEnqiry = asynHandler(async (req, res) => {
  try {
    const createdEnqiry = await Enquiry.create(req.body);
    res.json(createdEnqiry);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createEnqiry,
};
