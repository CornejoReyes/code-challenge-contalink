import { Box, Text } from '@gluestack-ui/themed';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Screen } from '~/app/components';
import { getInvoicesByDate } from '~/data/invoices';

export default function InvoicesScreen() {
  const now = dayjs('2022-01-03');
  const [startDate, setStartDate] = useState<string>(now.format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState<string>(now.format('YYYY-MM-DD'));
  const { data } = useQuery({
    queryKey: ['invoices', { startDate, endDate }],
    queryFn: () => getInvoicesByDate(startDate!, endDate!),
    enabled: !!startDate && !!endDate,
  });

  return (
    <Screen>
      <Box p="$4">
        <Text>This is the invoices screen</Text>
        {data &&
          data?.invoices?.map(invoice => (
            <Box my="$3">
              <Text>{invoice.id}</Text>
              <Text>{invoice.invoice_number}</Text>
              <Text>{invoice.total}</Text>
              <Text>{invoice.status}</Text>
              <Text>{invoice.invoice_date}</Text>
            </Box>
          ))}
      </Box>
    </Screen>
  );
}
