const mongoose = require('mongoose')

/*
|--------------------------------------------------------------------------
| Startup
|--------------------------------------------------------------------------
*/
mongoose.connect('mongodb://localhost/log')


/*
|--------------------------------------------------------------------------
| Model
|--------------------------------------------------------------------------
*/
const model =
{
  timestamp: {type: Date, default: Date.now},
  fields: Object,
  text: String
}

const Entry = mongoose.model('Entry', model)


/*
|--------------------------------------------------------------------------
| Operations
|--------------------------------------------------------------------------
*/
function getAll ()
{
  return new Promise((resolve, reject) =>
    Entry.find((err, entries) => err ? reject(err) : resolve(entries)))
}

function getById (id)
{
  return new Promise((resolve, reject) =>
    Entry.findById(id, (err, entry) => err ? reject(err) : resolve(entry)))
}

function getLastFields ()
{

}

function insertEntry ()
{

}

function updateById ()
{

}

function deleteById ()
{

}
