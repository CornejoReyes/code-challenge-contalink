import dayjs from 'dayjs';

export function formatNumberAsCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatStringAsDate(dateString: string, format: string) {
  const date = dayjs(dateString);

  return date.format(format);
}
