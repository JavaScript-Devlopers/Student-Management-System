"use strict"

const router = require('express').Router()

const { addClass, getAllclass, updateClass, deleteClass } = require("../../Controllers/Admins/Classes.controller")

router.post('/addClass', addClass)
router.get('/getAllclass', getAllclass)
router.post('/updateClass', updateClass)
router.post('/deleteClass', deleteClass)


module.exports = router