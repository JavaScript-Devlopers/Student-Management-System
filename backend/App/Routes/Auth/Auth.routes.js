
"use strict"
const router = require("express").Router()


const { RegisterUser } = require('../../Controllers/Auth/Auth.controller')



router.post('/registerUser', RegisterUser)




module.exports = router;


