"use strict"

const router = require("express").Router()

const { addTeachers } = require("../../Controllers/Admins/Teachers.controller")

router.post('/addTeachers', addTeachers)



module.exports = router;