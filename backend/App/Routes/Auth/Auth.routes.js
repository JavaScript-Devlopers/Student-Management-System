"use strict"
const router = require("express").Router()
const { RegisterUser , login } = require('../../Controllers/Auth/Auth.controller')
router.post('/registerUser', RegisterUser)
router.post('/login', login)
module.exports = router;
