const express = require("express");
var hbs = require('hbs');

const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })


const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })



app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/")

})


/// TEMPLATE ENGINE USING HBS


hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


app.get("/",(req,res)=>{
  res.render('home.hbs',{
    firstname:"Upload",
    lastname: "Resume"
  })
})


app.get("/products",(req,res)=>{
  res.render('products.hbs',{
  products: [
    "Watch",
    "Shirts",
    "Sunglasses",
  ],
})
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
