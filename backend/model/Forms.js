const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'first name must be provided'],
  },
  lastname: {
    type: String,
    required: [true, 'last name must be provided'],
  },
  amount: {
    type: String,
    required: [true, 'product price must be provided'],
  },
  jkwon_amount: {
    type: String,
  },
  paymentCrypto: {
    type: String,
    required: [true, 'product price must be provided'],
  },
  email: {
    type: String,
    required: [true, 'product price must be provided'],
  },
  wallet_address: {
    type: String,
    required: [true, 'wallet address must be provided'],
  },
  phone_number: {
    type: Number,
  },


})

module.exports = mongoose.model('Form', FormSchema)
