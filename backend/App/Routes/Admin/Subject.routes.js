"use strict"

const router = require("express").Router()

const { addSubject, } = require("../../Controllers/Admins/Subjects.controller")

router.post('/addSubject', addSubject)

 

module.exports = router;