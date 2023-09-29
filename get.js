import express from "express";
import bodyParser from "body-parser";

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
 res.send('yello there brother')
})
app.listen(3000, () => {
 console.log('we on port 3000')
})