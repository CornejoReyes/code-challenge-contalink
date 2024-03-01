import {
  Badge,
  BadgeText,
  Card,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { memo } from 'react';
import { Invoice } from '~/data/invoices';
import { formatNumberAsCurrency, formatStringAsDate } from '~/utils';

export const ITEM_HEIGHT = 70;

export interface Props {
  invoice: Invoice;
}

function InvoiceListItem({ invoice }: Props) {
  return (
    <Card my="$2" variant="ghost" bg="$white" rounded="$xl" h={ITEM_HEIGHT}>
      <HStack space="sm" alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space="sm">
          <VStack space="xs">
            <Text fontWeight="$bold" fontSize="$sm">
              {invoice.invoice_number}
            </Text>
            <Text fontSize="$xs" color="$textDark500">
              {formatStringAsDate(
                invoice.invoice_date,
                'DD [de] MMM [del] YYYY',
              )}
            </Text>
          </VStack>
        </HStack>
        <Badge
          size="md"
          variant="solid"
          borderRadius="$full"
          action={invoice.status === 'Vigente' ? 'success' : 'error'}>
          <BadgeText>{invoice.status}</BadgeText>
        </Badge>
        <Text>{formatNumberAsCurrency(invoice.total)}</Text>
      </HStack>
    </Card>
  );
}

export default memo(InvoiceListItem);
