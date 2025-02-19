"use strict"

const router = require("express").Router()

const { addSubject, getAllSubject } = require("../../Controllers/Admins/Subjects.controller")

router.post('/addSubject', addSubject)
router.get('/getAllSubject', getAllSubject)



module.exports = router;