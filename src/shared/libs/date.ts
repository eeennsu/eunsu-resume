import dayjs from 'dayjs';

export const getEstimatedDuration = (startDate: string, endDate: string, offsetDay = 15) => {
  const diffMonth = dayjs(endDate).diff(dayjs(startDate), 'month');
  const diffDays = dayjs(endDate).diff(dayjs(startDate), 'day');

  if (diffMonth < 1) {
    return diffDays >= offsetDay ? 1 : 0;
  }

  const remainingDays = diffDays - diffMonth * 30;

  return remainingDays > offsetDay ? diffMonth + 1 : diffMonth;
};

export const getKoreanAge = (birthDate: string) => {
  const today = dayjs();
  const birthday = dayjs(birthDate);
  let age = today.year() - birthday.year();

  const todayMonth = today.month() + 1;
  const birthdayMonth = birthday.month() + 1;

  if (
    birthdayMonth > todayMonth ||
    (birthdayMonth === todayMonth && birthday.date() > today.date())
  ) {
    age -= 1;
  }

  return age;
};

export const getCompanyServiceDuration = (startDate: string, endDate: string) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const years = end.year() - start.year();
  const months = end.month() - start.month();

  const adjustedYears = years + (months < 0 ? -1 : 0);
  const adjustedMonths = (months + 12) % 12;
  const adjustedDay = end.date() - start.date();

  const result = [];

  if (adjustedYears > 0) result.push(`${adjustedYears}년`);
  if (adjustedMonths > 0) result.push(`${adjustedMonths}개월`);
  if (adjustedDay > 0) result.push(`${adjustedDay}일`);

  return result.join(' ');
};

export const getWorkAnniversary = (startDate: string) => {
  const today = dayjs();

  if (today.isBefore(dayjs(startDate))) {
    return 0;
  }

  return today.diff(dayjs(startDate), 'year');
};
