import moment from './moment.js'

export const defaultDateFrom = formatDate(moment().add(1, 'days'));
export const defaultDateTo = formatDate(moment().add(3, 'days'));
export const maxDate = formatDate((moment().add(1, 'month')).endOf('month'));
export const minDate = formatDate(moment());

function formatDate(date: Date): string {
  return moment(date).format('YYYY-MM-DD');
}
