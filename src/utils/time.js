import moment from 'moment'

const monthNum = +moment().format('M')

// 不限制时间
export const UNLIMIT_TIME = []
// 今天
export const TODAY_NOW_TIME = [`${moment().format('YYYY-MM-DD')}`, `${moment().format('YYYY-MM-DD')}`]
// 近七天
export const LATEST_SEVEN_DAYS = [`${moment().subtract(7, 'day').add(1, 'day').format('YYYY-MM-DD')}`, `${moment().format('YYYY-MM-DD')}`]
// 近三十天
export const LATEST_THIREY_DAYS = [`${moment().subtract(30, 'day').add(1, 'day').format('YYYY-MM-DD')}`, `${moment().format('YYYY-MM-DD')}`]
// 近九十天
export const LATEST_NINETY_DAYS = [`${moment().subtract(3, 'month').add(1, 'day').format('YYYY-MM-DD')}`, `${moment().format('YYYY-MM-DD')}`]
// 近一年
export const LATEST_YEAR_DAYS = [`${moment().subtract(1, 'year').add(1, 'day').format('YYYY-MM-DD')}`, `${moment().format('YYYY-MM-DD')}`]
// 本周
export const WEEK_NOW_TIME = [`${moment().subtract(moment().format('E'), 'day').format('YYYY-MM-DD')}`, `${moment().format('YYYY-MM-DD')}`]
// 本月
export const MONTH_NOW_TIME = [`${moment().format('YYYY-MM-01')}`, `${moment().format('YYYY-MM-DD')}`]
// 上个月
export const MONTH_BEFORE_ONE_NOW_TIME = (() => {
  const lastMonthStart = moment().format(`YYYY-${monthNum - 1}-01`)
  let thisMonthStartDay = moment().format(`YYYY-${monthNum}-01`)
  const lastMonthEnd = moment(thisMonthStartDay).subtract(1, 'day').format('YYYY-MM-DD')
  return [lastMonthStart, lastMonthEnd]
})()
// 本季度
export const SEASON_NOW_TIME = (() => {
  let seasonTime = []
  if (monthNum < 4) {
    seasonTime = [`${moment().format('YYYY-01-01')}`, `${moment().format('YYYY-MM-DD')}`]
  } else if (monthNum < 7) {
    seasonTime = [`${moment().format('YYYY-04-01')}`, `${moment().format('YYYY-MM-DD')}`]
  } else if (monthNum < 10) {
    seasonTime = [`${moment().format('YYYY-07-01')}`, `${moment().format('YYYY-MM-DD')}`]
  } else {
    seasonTime = [`${moment().format('YYYY-10-01')}`, `${moment().format('YYYY-MM-DD')}`]
  }
  return seasonTime
})()
// 本年
export const YEAR_NOW_TIME = [`${moment().format('YYYY-01-01')}`, `${moment().format('YYYY-12-31')}`]

export default {
  UNLIMIT_TIME,
  TODAY_NOW_TIME,
  LATEST_SEVEN_DAYS,
  LATEST_THIREY_DAYS,
  LATEST_NINETY_DAYS,
  LATEST_YEAR_DAYS,
  WEEK_NOW_TIME,
  MONTH_NOW_TIME,
  SEASON_NOW_TIME,
  YEAR_NOW_TIME
}
