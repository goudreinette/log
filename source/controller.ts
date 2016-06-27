import {prettyDates, prettyDateProperty, combineFields} from './helpers'


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
export function showEntries (req, res)
{
  Entry.find()
    .then(entries => res.render('entries', {entries: prettyDates(entries)}))
}

export function showEntry (req, res)
{
  Entry.findById(req.params.id)
    .then(entry => res.render('entry', {entry: prettyDateProperty(entry)}))
}


export function showNew (req, res)
{
  res.render('edit', {title: 'New'})
}


export function showEdit (req, res)
{
  Entry.findById(req.params.id)
    .then(entry => res.render('edit', {title: 'Edit', entry: prettyDateProperty(entry)}))
}


export function saveEntry (req, res)
{
  new Entry(req.body)
    .save()
    .then(_ => res.redirect('/'))
}


export function updateEntry (req, res)
{
  console.log('req.body:', req.body)
  const draft = combineFields(req.body)
  console.log('after combine: ', draft)
  Entry.findByIdAndUpdate(req.params.id, {$set: {fields: draft.fields, text: draft.text}})
    .then('DB:', console.log)
    .then(_ => res.redirect('/'))
}


export function deleteEntry (req, res)
{
  Entry.findOneAndRemove(req.params.id)
    .then(console.log)
    .then(_ => res.redirect('/'))
}
