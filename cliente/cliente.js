const express = require("express");
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, "../views")

router.get("/loginAluno", (req, res)=>{
   res.render('login')
});

router.post('/save',(req, res)=>{
   res.render()
});

router.get('/:id', (req, res)=>{
   res.render()
});




module.exports = router