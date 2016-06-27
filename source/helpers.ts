import * as moment from 'moment'

export function prettyDate (date: Date = new Date())
{
  return moment(date).format('dddd, MMMM d, YYYY h:m')
}

export function prettyDates (objects: Array<hasDate>)
{
  return objects.map(prettyDateProperty)
}

export function prettyDateProperty (object: hasDate)
{
  return Object.assign({}, object, {date: prettyDate(object.date)})
}


interface hasDate
{
  date: Date
}
