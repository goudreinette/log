import {prettyDates, prettyDateProperty} from './helpers'

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
    .then(console.log)
    .then(_ => res.redirect('/'))
}


export function updateEntry (req, res)
{
  const {fields, text} = res.body
  console.log(res.body)
  Entry.findByIdAndUpdate(req.params.id, {$set: {fields, text}})
    .then(console.log)
    // .then(_ => res.redirect('/'))
}


export function deleteEntry (req, res)
{
  Entry.findOneAndRemove(req.params.id)
    .then(console.log)
    .then(_ => res.redirect('/'))
}
