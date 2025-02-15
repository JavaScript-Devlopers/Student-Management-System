"use strict"

const router = require('express').Router()

const {addClass , updateClass, deleteClass} = require('../../Controllers/Classes/Classes.controller') 

router.post('/addClass', addClass)
router.post('/updateClass', updateClass)
router.post('/deleteClass', deleteClass)
 

module.exports = router