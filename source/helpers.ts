import * as moment from 'moment'

export function prettyDate (date: Date = new Date())
{
  return moment(date).format('dddd, MMMM Do, YYYY H:m')
}

export function prettyDates (objects: Array<hasDate>)
{
  return objects.map(prettyDateProperty)
}

export function prettyDateProperty (object: entry)
{
  const result =  {_id: object._id, text: object.text, fields: object.fields, date: prettyDate(object.date)}
  console.log(result)
  return result
}

/**
 * Combines all properties except 'text' in the given object
 * @method combineFields
 * @param  {formValues}  values object with 'text' and other properties
 * @return {[type]}             object with other properties combined
 */
export function combineFields (values : formValues)
{
  return {text: values.text, fields: withoutText(values)}
}

/**
 * Filters an object to exclude 'text' property
 * @method withoutText
 * @param  {FormData}  object object to filter
 * @return {[object]}         without text property
 */
export function withoutText (object: Object)
{
  const filtered = Object.keys(object).filter(key => key != 'text')
  return Object.assign({}, filtered.map(key => ({[key]: object[key]})))
}

/**
 * Interfaces
 */
interface hasDate
{
  date: Date
}

interface entry
{
  _id: String
  date: Date
  fields: Object,
  text: String
}

interface formValues
{
  text: String
}
