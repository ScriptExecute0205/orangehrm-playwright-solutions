import { DATE_FORMAT } from '@constants/formats';

const pad = (value: number): string => String(value).padStart(2, '0');

export const addDays = (days: number, from: Date = new Date()): Date => {
  const result = new Date(from);
  result.setDate(result.getDate() + days);
  return result;
};

export const formatDate = (date: Date, format: string = DATE_FORMAT): string =>
  format
    .replace('yyyy', String(date.getFullYear()))
    .replace('mm', pad(date.getMonth() + 1))
    .replace('dd', pad(date.getDate()));