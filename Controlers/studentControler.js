
//get all student data
//get student


const student = require("../models/studentModels")

//
const getAllStudents = async (req, res) => {
    let students = await student.find()

    res.render('index', {students})
  
}




//get all student data
//get student
//
const CreatesingleStudent = async (req, res) => {

    let id = req.params.id
    let singleData = await student.findById(id)
res.render('show',{singleData})
}


//get all student data
//get student
//
const showStudentForm = (req, res) => {
res.render('create')
}

// edit student data
//get student
//
const editStudentForm = (req, res) => {
    
    res.redirect('/student')
}


// edit student data
//get student
//
const EditshowStudentForm = async (req, res) => {

    let id = req.params.id
  let singleData = await student.findById(id)

    res.render('edit', {
        singleData
    })
   
}



//get all student data
//get student
//
const CreateStudent = (req, res) => {
    
    student.create({
        ...req.body,
        photo : req.file.filename
    })

    res.redirect('/student')
    }
    


//delete all student data
//get student
//
const DeleteStudent = async (req, res) => {

    let id = req.params.id

   await student.findByIdAndDelete(id)
   res.redirect('/student')
   
    }
    
//Update all student data
//get student
//
const UpdateStudent = async (req, res) => {

    let id = req.params.id

    if(req.file){

        await student.findByIdAndUpdate(id, {
            ...req.body,
            photo : req.file.filename
            
           })
    }else{
           await student.findByIdAndUpdate(id, {
            ...req.body,
            photo : req.body.oldphoto
            
           })
    }

   

    res.redirect('/student')

    }
    


//module export
module.exports ={
    getAllStudents,
    CreateStudent,
    CreatesingleStudent,
    showStudentForm,
    DeleteStudent,
    editStudentForm,
    UpdateStudent,
    EditshowStudentForm
}