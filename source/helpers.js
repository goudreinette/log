const dateFormat = require('dateformat')
module.exports = {prettyDate, prettyDates, prettyDateProperty}

function prettyDate (date = new Date())
{
  return dateFormat(date, 'dddd, mmmm dS, yyyy HH:MM')
}

function prettyDates (objects)
{
  return objects.map(prettyDateProperty)
}

function prettyDateProperty (object)
{
  const result = Object.assign(object, {date: prettyDate(object.date)})
  console.log(result)
  return result
}
