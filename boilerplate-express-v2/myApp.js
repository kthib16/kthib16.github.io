require('dotenv').config()

let express = require('express');
let app = express();

app.get('/', (req, res) => {
  let absolutePath = __dirname + '/boilerplate-express-v2/views/index.html'

  res.sendFile(absolutePath)
  app.use(express.static(__dirname + '/public'))


})

app.get('/json', (req, res) => {
  
   let object = {
    "message": "Hello json"
  }

  res.json(object)
})
