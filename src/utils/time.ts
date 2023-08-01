const minute2Second = 60
const hour2Second = 60 * minute2Second

const day2Second = hour2Second * 24

export function days2Seconds(days: number) {
  return day2Second * days
}
