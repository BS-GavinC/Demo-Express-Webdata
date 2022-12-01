const express = require('express')
const router = require('./routers/router')
const bodyParser = require('body-parser')

require('dotenv').config()

const jsonParser = bodyParser.json()

const port = process.env.PORT

const app = express()

app.use(bodyParser.json())
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.set('views', './views')

//midleware entrée
app.get('/',(req, res) => {
    console.log(' connection : ' + req.url);
    res.status(200).render('monHtml.ejs', {data: "pomme"})
})

app.get('/get', (req, res) => {
    
    res.status(200).json({id : 42, name: "H2G2"})
})

app.post('/post', (req, res) => {
    console.log(req.body);
    req.body.name = "fabrice"
    res.status(200).json(req.body)
})
    
app.use(router)


//midleware sortie si aucun send
// app.use((req, res) => {
//     console.log('not found bichon');
//     res.sendStatus(404)
// })

app.listen(port, () => {
    console.log("server listen at http://localhost:" + port);
})