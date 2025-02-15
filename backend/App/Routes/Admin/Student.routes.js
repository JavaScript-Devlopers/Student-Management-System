"use strict"
const router = require("express").Router()
const { getAllStudent , updateStudent , addStudent} = require('../../Controllers/Admins/Student.controller')


router.post('/addStudent', addStudent)
router.post('/updateStudent', updateStudent)
router.post('/getAllStudent', getAllStudent)



module.exports = router;
