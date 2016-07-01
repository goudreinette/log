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

export async function showEntry (req, res)
{
  const entry = await Entry.findById(req.params.id)
  res.render('entry', {entry: prettyDateProperty(entry)})
}


export async function showNew (req, res)
{
  const lastEntry = await Entry.find().sort('-date').limit(1).select('fields').exec()
  const entry =
  {
    fields: lastEntry[0].fields,
    date: prettyDate(new Date())
  }
  res.render('edit', {title: 'New', entry})
}


export async function showEdit (req, res)
{
  const entry = await Entry.findById(req.params.id)
  res.render('edit', {title: 'Edit', entry: prettyDateProperty(entry)})
}


export async function saveEntry (req, res)
{
  await new Entry(req.body).save()
  res.redirect('/')
}


export async function updateEntry (req, res)
{
  const draft = combineFields(req.body)
  await Entry.findByIdAndUpdate(req.params.id, {$set: {fields: draft.fields, text: draft.text}})
  res.redirect('/')
}


export async function deleteEntry (req, res)
{
  await Entry.findOneAndRemove(req.params.id)
  res.redirect('/')
}
