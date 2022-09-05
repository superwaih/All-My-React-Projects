require('dotenv').config();



const getAllUsers = async (req, res) => {
    
    res.send("gett all users")
  };

  module.exports = {
    getAllUsers
  }