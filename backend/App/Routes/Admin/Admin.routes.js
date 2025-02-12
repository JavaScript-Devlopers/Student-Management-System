"use strict"

const router = require("express").Router()

const { AddSubject } = require("../../Controllers/Admins/Admin.controller")

router.post('/AddSubject', AddSubject)



module.exports = router;