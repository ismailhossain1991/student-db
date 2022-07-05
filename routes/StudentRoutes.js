const express = require('express');
const { getAllStudents, CreateStudent, CreatesingleStudent, showStudentForm, DeleteStudent, UpdateStudent, editStudentForm, EditshowStudentForm } = require('../Controlers/studentControler');
const router = express.Router();
const multer = require('multer')
const path = require('path')

//multer config
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../assets/upload/'))
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() +'_'+ file.originalname)
    }
})


//multer load
const studentMulter = multer({
    storage : storage
}).single('photo');

//student route

router.get('/create',showStudentForm)
router.get('/', getAllStudents)
router.post('/',studentMulter, CreateStudent)
router.get('/edit/:id', EditshowStudentForm)
router.get('/:id', CreatesingleStudent)
router.get('/delete/:id', DeleteStudent)
router.post('/update/:id',studentMulter, UpdateStudent)






//export router
module.exports = router;