import axios from 'axios';
import { Invoice, getInvoicesByDate } from '../invoices';

const mockInvoice: Invoice = {
  id: 1,
  invoice_number: 'invoice-1',
  total: 10,
  invoice_date: '2022-01-01',
  status: 'Vigente',
};

describe('Testing invoices data getters', () => {
  it('should return invoices by date correctly', async () => {
    const mockResponse = {
      status: 200,
      data: {
        invoices: [mockInvoice],
        records: 1,
        statusCode: 200,
      },
    };
    (axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);
    const response = await getInvoicesByDate('2022-01-01', '2022-01-01');

    expect(response.invoices).toHaveLength(1);
    expect(response.invoices[0]).toStrictEqual(mockInvoice);
    expect(response.records).toBe(1);
    expect(response.statusCode).toBe(200);
  });

  it('should return zero invoices if the request responded with error in range 3xx - 4xx', async () => {
    const mockResponse = {
      status: 403,
      data: {
        invoices: [],
        records: 0,
        statusCode: 403,
      },
    };
    (axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);
    const response = await getInvoicesByDate('2022-01-01', '2022-01-01');

    expect(response.invoices).toHaveLength(0);
    expect(response.records).toBe(0);
    expect(response.statusCode).toBe(403);
  });

  it('should reject if request responded with error 5xx', async () => {
    const mockResponse = {
      status: 503,
    };
    (axios.get as jest.Mock).mockRejectedValueOnce(mockResponse);
    await expect(() =>
      getInvoicesByDate('2022-01-01', '2022-01-01'),
    ).rejects.toHaveProperty('status', 503);
  });
});
