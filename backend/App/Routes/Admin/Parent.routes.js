
const router = require('express').Router()

const {addParent ,editParent ,getAllParent ,deleteParent} = require('../../Controllers/Admins/Parent.controller')

router.post('/addParent', addParent)
router.post('/editParent', editParent)
router.post('/getAllParent', getAllParent)
router.post('/deleteParent', deleteParent)

module.exports = router


// "use strict"
// const router = require("express").Router()
// const { getAllStudent , updateStudent , addStudent} = require('../../Controllers/Admins/Student.controller')


// router.post('/addStudent', addStudent)
// router.post('/updateStudent', updateStudent)
// router.post('/getAllStudent', getAllStudent)



// module.exports = router;