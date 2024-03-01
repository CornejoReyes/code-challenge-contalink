import { formatNumberAsCurrency, formatStringAsDate } from '../formatters';

describe('Formatters module', () => {
  describe('Testing formatNumbersAsCurrency', () => {
    it('should format 45 to $45.00 correctly', () => {
      expect(formatNumberAsCurrency(45)).toEqual('$45.00');
    });

    it('should format 37.91 to $37.91 correctly', () => {
      expect(formatNumberAsCurrency(37.91)).toEqual('$37.91');
    });

    it('should format 5288.4 to $5,288.40 correctly', () => {
      expect(formatNumberAsCurrency(5288.4)).toEqual('$5,288.40');
    });
  });

  describe('Testing formatStringAsDate', () => {
    it('should format a date string to a formatted date string MMMM D, YYYY', () => {
      expect(formatStringAsDate('2023-01-01', 'MMMM D, YYYY')).toEqual(
        'January 1, 2023',
      );
    });

    it('should format a date string to a formatted date string MM/DD/YYYY', () => {
      expect(formatStringAsDate('2023-01-05', 'MM/DD/YYYY')).toEqual(
        '01/05/2023',
      );
    });
  });
});
