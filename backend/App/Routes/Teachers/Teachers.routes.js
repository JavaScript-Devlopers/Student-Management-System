"use strict"

const router = require("express").Router()

const { Addteachers } = require("../../Controllers/Teachers/Teachers.controller")

router.post('/Addteachers', Addteachers)



module.exports = router;