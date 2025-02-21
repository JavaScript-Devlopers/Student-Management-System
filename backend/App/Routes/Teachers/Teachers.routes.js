"use strict"

const router = require("express").Router()

const { Addteachers , getAllteacher} = require("../../Controllers/Teachers/Teachers.controller")

router.post('/Addteachers', Addteachers)
router.post('/getAllteacher', getAllteacher)




module.exports = router;