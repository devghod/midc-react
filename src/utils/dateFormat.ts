import moment from "moment"

export const dateFormat = (date: any, format: string) => {
  if (date === '') return
  const defaultFormat = format ? format : 'yyyy-MM-DD'
  const newDate = moment(date).format(defaultFormat);
  return newDate;
}