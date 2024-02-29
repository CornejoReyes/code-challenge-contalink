import { get } from '~/adapters/http';

export interface Invoice {
  id: number;
  invoice_number: string;
  total: number;
  invoice_date: string;
  status: 'Vigente' | 'Cancelado';
}

export interface GetInvoicesResponse {
  invoices: Invoice[];
  records: number;
  statusCode: number;
}

export async function getInvoicesByDate(
  start: string,
  end: string,
): Promise<GetInvoicesResponse> {
  const params = {
    start_date: start,
    end_date: end,
  };
  const response = await get<GetInvoicesResponse>('/invoices', { params });
  if (response.ok) {
    return response.data;
  }
  return {
    invoices: [],
    records: 0,
    statusCode: response.status,
  };
}
