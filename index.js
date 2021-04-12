const express = require ('express')
const bodyParser = require('body-parser')

const app = express()

const log = console.log

app.use(express.urlencoded({
    extended: true
  }));
app.get('/', (req, res) => {
    res.send(`
    <h1>hi there<h1>
    <form method="POST">
    <label for="email">email</label>
    <input name="email"><br>
    <label for="name">Salasana</label>
    <input name="password"><br>
    <label for="name">Confirm</label>
    <input name="confirmPassword"><br>
    <button>submit</button>
    </form>`
    
    )
})
app.post('/', (req, res) => {
    
        log(req.body)
    
   
})

app.listen (3000, () => {
    log('serveri rulaa')
})

