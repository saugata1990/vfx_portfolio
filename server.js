const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));
app.use(cors())

app.get('/', (req, res) => {
    res.render('landing')
})


app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})