module.exports = {showEntries, showNew, showEdit, saveEntry, updateEntry, deleteEntry}
const {prettyDates, prettyDateProperty} = require('./helpers')

/*
|--------------------------------------------------------------------------
| Model
|--------------------------------------------------------------------------
*/
const Entry = require('./Entry')

/*
|--------------------------------------------------------------------------
| Controller
|--------------------------------------------------------------------------
*/
function showEntries (req, res)
{
  Entry.find()
    .then(entries => res.render('entries', {entries: prettyDates(entries)}))
}


function showNew (req, res)
{
  res.render('edit', {title: 'New'})
}


function showEdit (req, res)
{
  Entry.findById(req.params.id)
    .then(entry => res.render('edit', {title: 'Edit', entry: prettyDateProperty(entry)}))
}


function saveEntry (req, res)
{
  new Entry(req.body)
    .save()
    .then(console.log)
    .then(_ => res.redirect('/entries'))
}


function updateEntry (req, res)
{
  const {fields, text} = res.body
  Entry.findByIdAndUpdate(req.params.id, {$set: {fields, text}})
    .then(console.log)
    .then(_ => res.redirect('/entries'))
}


function deleteEntry (req, res)
{
  Entry.findOneAndRemove(req.params.id)
    .then(console.log)
    .then(_ => res.redirect('/entries'))
}
