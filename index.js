const express = require('express')
const mustache = require('mustache-express')
const bodyparser = require('body-parser')

/*
|--------------------------------------------------------------------------
| Setup
|--------------------------------------------------------------------------
*/
const app = express()
app.use(bodyparser())

/*
|--------------------------------------------------------------------------
| Templates setup
|--------------------------------------------------------------------------
*/
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/
app.get('/')
app.get('/new')
app.get('/edit/:id')

app.post('/save')
app.put('/save/:id')
app.delete('/delete/:id')


app.listen(3000, () => console.log('listening on port 3000'))
