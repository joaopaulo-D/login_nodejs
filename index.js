const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const path = require('path');

var login = "joao";
var email = "joao@gmail.com";
var password = "123456";
 
app.use(session({ secret: 'fqjfknewgfnkdvngrignirengikfe' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.post('/', (req, res) => {

    if(req.body.login == login && req.body.password == password && req.body.email == email){
        req.session.login = login;
        res.render('logado');
    }else{
        res.render('index');
    }
})

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log("servidor rodando");
})