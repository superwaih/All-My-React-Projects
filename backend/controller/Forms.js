require('dotenv').config();

const Form = require('../model/Forms');
const { StatusCodes } = require('http-status-codes')
const nodemailer = require('nodemailer'); 


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jailkwoncontrol@gmail.com',
    pass: 'oozpeiffrtyttpvn'
  }
});


const getAllForms = async (req, res) => {
  const forms = await Form.find({})
  
  res.status(200).json(forms);
};

const PostForm = async (req, res) => {
  const { firstname, lastname, jkwon_amount, email, amount, paymentCrypto, wallet_address, phone_number } = req.body;
    const form = await Form.create(
      {
        firstname, lastname, jkwon_amount, email, amount, paymentCrypto, wallet_address, phone_number
      }
    )

    const mailOptions = {
      from: 'jailkwoncontrol@gmail.com',
      to: 'jailkwon@protonmail.com',
      subject: 'New transaction order received',
      // text: 'That was easy!',
      html:`<h1>You have pending order</h1><p>${firstname} ${firstname}, just completed filling the form to send ${amount} of ${paymentCrypto} from the address ${wallet_address}. Please confirm. </p>`
    };
    
  
   
    res.status(201).json({"msg": "done"}) 
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });  
    
  
  };


module.exports = {
  getAllForms,
  PostForm,
};
