const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res, next)=>{
    res.render('main');
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});