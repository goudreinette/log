/*
|--------------------------------------------------------------------------
| Setup database
|--------------------------------------------------------------------------
| Using config.json
*/
const {host, database, port} = require('../config.json')
const mongoose = require('mongoose')

mongoose.connect(host, database, port)
mongoose.Promise = Promise

/*
|--------------------------------------------------------------------------
| Model
|--------------------------------------------------------------------------
*/
const schema =
{
  date: {type: Date, default: Date.now},
  fields: Object,
  text: String
}

module.exports = mongoose.model('Entry', new mongoose.Schema(schema))
