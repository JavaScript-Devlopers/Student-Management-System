
"use strict"
const router = require("express").Router()
const { login } = require('../../Controllers/Auth/Auth.controller')
router.post('/login', login)
module.exports = router;


