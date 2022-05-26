
let express = require('express');
let app = express();

app.get('/', (req, res) => {
  let absolutePath = __dirname + '/views/index.html'

  res.sendFile(absolutePath)
  app.use('/public', express.static(__dirname + '/public'))


})

app.get('/json', (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    let object = {
      "message": "HELLO JSON"
    }
  } else {
  let object = {
    "message": "Hello json"
  }
}

  res.json(object)
})
