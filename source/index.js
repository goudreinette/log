const express = require('express')
const mustache = require('mustache-express')
const bodyparser = require('body-parser')
const controller = require('./controller')

/*
|--------------------------------------------------------------------------
| Setup
|--------------------------------------------------------------------------
*/
const app = express()
app.use(bodyparser.urlencoded({extended: true}))

/*
|--------------------------------------------------------------------------
| Templates setup
|--------------------------------------------------------------------------
*/
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/../views')


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/
app.get('/', controller.showEntries)
app.get('/new', controller.showNew)
app.get('/edit/:id', controller.showEdit)

app.post('/save', controller.saveEntry)
app.post('/save/:id', controller.saveEntry)
app.delete('/delete/:id', controller.deleteEntry)


app.listen(3000, () => console.log('listening on port 3000'))
