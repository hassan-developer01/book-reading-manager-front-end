import { add } from 'date-fns'

export function afterDays(days: number) {
  const date = new Date;

  return add(date, {days: days});
}