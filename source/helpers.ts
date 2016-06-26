const dateFormat = require('dateformat')

export function prettyDate (date = new Date())
{
  return dateFormat(date, 'dddd, mmmm dS, yyyy HH:MM')
}

export function prettyDates (objects)
{
  return objects.map(prettyDateProperty)
}

export function prettyDateProperty (object)
{
  return Object.assign(object, {date: prettyDate(object.date)})
}
