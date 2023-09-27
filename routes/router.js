const express = require('express');
const router = express.Router();

//auth
const login = require('../controllers/auth/login');
const auth = require('../middleware/auth');

//curd
const show = require('../controllers/curd/show');
// const edit = require('../controllers/curd/edit');


// auth
router.post('/login' , login)



//curd
router.post('/show' , auth , show)
// router.post('/edit' , auth , edit)


module.exports = router;