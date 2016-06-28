export interface hasDate
{
  date: Date
}

export interface entry
{
  _id: String
  date: Date
  fields: Object,
  text: String
}

export interface formValues
{
  text: String
}
