import * as moment from 'moment'
import {entry, hasDate, formValues} from './interfaces'

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
  const result = {text: values.text, fields: withoutText(values)}
  console.log(result)
  return result
}

/**
 * Filters an object to exclude 'text' property
 * @method withoutText
 * @param  {FormData}  object object to filter
 * @return {[object]}         without text property
 */
export function withoutText (object: formValues)
{
  const copy = object
  if (copy.text) delete copy.text
  return copy
}
