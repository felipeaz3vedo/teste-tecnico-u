import { AppError } from '../infra/errors/AppError';

export function convertStrToDateTime(dateStr: string | Date): Date {
  if (typeof dateStr !== 'string')
    throw new AppError('Invalid value type. Expect a string', 500);

  const [day, month, year] = dateStr.split('/');

  const formatedDate = `${year}/${month}/${day}`;

  return new Date(formatedDate);
}
