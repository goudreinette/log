import * as express from 'express'
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
import * as controller from './controller'

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
app.engine('.hbs', handlebars({extname: '.hbs'}))
app.set('view engine', '.hbs')
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
app.post('/save/:id', controller.updateEntry)
app.delete('/delete/:id', controller.deleteEntry)


app.listen(3000, () => console.log('listening on port 3000'))
