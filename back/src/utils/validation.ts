const hours = (time: string) =>
  /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);

const isFutureDate = (date: Date) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return date.getTime() > new Date().getTime();
};

const isCompareDate = (date1: Date, date2: Date) => {
  if (typeof date1 === 'string') {
    date1 = new Date(date1);
  }

  if (typeof date2 === 'string') {
    date2 = new Date(date2);
  }

  return date2.getTime() > date1.getTime();
};

const ValidationUtil = {
  hours,
  isFutureDate,
  isCompareDate,
};

export default ValidationUtil;
