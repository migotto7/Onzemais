function calculateHourDifference(date1: Date, date2: Date) {
  if (typeof date1 === 'string') {
    date1 = new Date(date1);
  }

  if (typeof date2 === 'string') {
    date2 = new Date(date2);
  }

  const differenceInMilliseconds = Math.abs(date2.getTime() - date1.getTime());

  const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

  return differenceInHours;
}

const DateUtil = {
  calculateHourDifference,
};

export default DateUtil;
