"use strict"
const router = require("express").Router()
const { getAllStudent , UpdateStudent , AddStudent} = require('../../Controllers/Student/Student.controller')


router.post('/AddStudent', AddStudent)
router.post('/UpdateStudent', UpdateStudent)
router.post('/getAllStudent', getAllStudent)



module.exports = router;
