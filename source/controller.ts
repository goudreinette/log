import {prettyDates, prettyDateProperty, combineFields, prettyDate} from './helpers'


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
export async function showEntries (req, res)
{
  const entries = await Entry.find()
  res.render('entries', {entries: prettyDates(entries)})
}

export function showEntry (req, res)
{
  Entry.findById(req.params.id)
    .then(entry => res.render('entry', {entry: prettyDateProperty(entry)}))
}


export function showNew (req, res)
{
  res.render('edit', {title: 'New', entry: {date: prettyDate(new Date())}})
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
  const draft = combineFields(req.body)
  Entry.findByIdAndUpdate(req.params.id, {$set: {fields: draft.fields, text: draft.text}})
    .then(_ => res.redirect('/'))
}


export function deleteEntry (req, res)
{
  Entry.findOneAndRemove(req.params.id)
    .then(_ => res.redirect('/'))
}
