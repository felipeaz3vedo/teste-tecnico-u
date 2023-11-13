import { AppError } from '../infra/errors/AppError';

export const dateTimeToDate = (dateTime: Date | string): string => {
  if (typeof dateTime !== 'object')
    throw new AppError('Invalid value type. Expect a Date object', 500);

  const day = (dateTime.getDate() + 1).toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
  const year = dateTime.getFullYear();

  const date = `${day}/${month}/${year}`;

  return date;
};
