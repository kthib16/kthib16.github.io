
let express = require('express');
let app = express();

app.get('/', (req, res) => {
  let absolutePath = __dirname + '/boilerplate-express-v2/views/index.html'

  res.sendFile(absolutePath)
  app.use('/boilerplate-express-v2/public', express.static('/boilerplate-express-v2/public/public'))


})

app.get('/json', (req, res) => {
  let object = {}
  if(process.env.MESSAGE_STYLE === 'uppercase'){
     object = {
      "message": "HELLO JSON"
    }
  } else {
   object = {
    "message": "Hello json"
  }
}

  res.json(object)
})
