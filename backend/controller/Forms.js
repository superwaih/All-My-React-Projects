const Form = require('../model/Forms');
const { StatusCodes } = require('http-status-codes')


const getAllForms = async (req, res) => {
  const forms = await Form.find({})
    

  res.status(200).json({ forms, nbHits: forms.length });
};

const PostForm = async (req, res) => {
    const form = await Form.create(req.body)
    res.status(StatusCodes.CREATED).json({ "success": "done" })   
  
  };


module.exports = {
  getAllForms,
  PostForm,
};
