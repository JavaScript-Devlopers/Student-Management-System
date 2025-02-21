"use strict"

const router = require("express").Router()

const { Addteachers, getAllteacher, deleteTeacher , updateTeacher } = require("../../Controllers/Teachers/Teachers.controller")

router.post('/Addteachers', Addteachers)
router.post('/getAllteacher', getAllteacher)
router.post('/updateTeacher', updateTeacher)
router.post('/deleteTeacher', deleteTeacher)





module.exports = router;