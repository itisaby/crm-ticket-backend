const express = require('express')
const RegisterAuth = require('../controller/auth.register')
const router = express.Router()

router.post("/", RegisterAuth);

module.exports = router;