const express = require('express')
const router = express.Router()

const {
    getAllForms,
    PostForm,
} = require('../controller/Forms')

router.route('/').get(getAllForms)
router.route('/create').post(PostForm)

module.exports = router