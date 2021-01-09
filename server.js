const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'luis'
    });
})

app.get('/about', (req, res) => {
        res.render('about');
    })
    // 

// app.get('/Json', (req, res) => {
//     let salida = {
//         nombre: 'Luis',
//         edad: 25,
//         url: req.url
//     };

//     res.send(salida);

// })

app.get('/data', (req, res) => {
    res.send('Hola Data')
})


app.listen(port, () => {

    console.log(`Escuchando Peticiones en el puerto ${port}`);
})