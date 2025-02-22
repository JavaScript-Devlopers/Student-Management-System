"use strict"

const router = require("express").Router()

const { addTeachers , getAllteacher , updateTeacher , deleteTeacher  } = require("../../Controllers/Admins/Teachers.controller")

router.post('/addTeachers', addTeachers)
router.post('/getAllteacher', getAllteacher)
router.post('/updateTeacher', updateTeacher)
router.post('/deleteTeacher', deleteTeacher)



module.exports = router;