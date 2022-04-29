const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res, next)=>{
    res.render('main');
});

app.post('/', (req, res, next)=>{
    const ratingValue = req.body.ratingInput;
    if(!ratingValue){
        res.send('<script>alert("Not rated!"); window.location.href = "/"; </script>');
    } else {
        res.render('thank', {ratingStar: ratingValue})
    }
});

app.get('/thank', (req, res, next)=>{
    res.render('thank');
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});