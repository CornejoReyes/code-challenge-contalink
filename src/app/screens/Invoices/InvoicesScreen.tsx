import {
  Badge,
  BadgeText,
  Box,
  Button,
  ButtonIcon,
  Card,
  FlatList,
  HStack,
  Heading,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
import { ListRenderItem } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DatePicker, TopBar } from '~/app/components';
import FunnelIcon from '~/assets/funnel.svg';
import { Invoice, getInvoicesByDate } from '~/data/invoices';
import { formatNumberAsCurrency, formatStringAsDate } from '~/utils/formatters';

const ITEM_HEIGHT = 70;

export default function InvoicesScreen() {
  const insets = useSafeAreaInsets();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState<string>(
    dayjs('2022-01-03').format('YYYY-MM-DD'),
  );
  const [endDate, setEndDate] = useState<string>(
    dayjs('2022-01-03').format('YYYY-MM-DD'),
  );
  const { data } = useQuery({
    queryKey: ['invoices', { startDate, endDate }],
    queryFn: () => getInvoicesByDate(startDate!, endDate!),
    enabled: !!startDate && !!endDate,
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const getItemListLayout = (_: any, idx: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * idx,
    index: idx,
  });

  const handleDatesChange = ({
    startDate: start,
    endDate: end,
  }: {
    startDate: string;
    endDate: string;
  }) => {
    setStartDate(start);
    setEndDate(end);
    toggleModal();
  };

  const keyExtractor = (item: Invoice) => {
    return item.invoice_number;
  };

  const itemRenderer: ListRenderItem<Invoice> = useCallback(({ item }) => {
    return (
      <Card my="$2" variant="ghost" bg="$white" rounded="$xl" h={ITEM_HEIGHT}>
        <HStack space="sm" alignItems="center" justifyContent="space-between">
          <HStack alignItems="center" space="sm">
            <VStack space="xs">
              <Text fontWeight="$bold" fontSize="$sm">
                {item.invoice_number}
              </Text>
              <Text fontSize="$xs" color="$textDark500">
                {formatStringAsDate(
                  item.invoice_date,
                  'DD [de] MMM [del] YYYY',
                )}
              </Text>
            </VStack>
          </HStack>
          <Badge
            size="md"
            variant="solid"
            borderRadius="$full"
            action={item.status === 'Vigente' ? 'success' : 'error'}>
            <BadgeText>{item.status}</BadgeText>
          </Badge>
          <Text>{formatNumberAsCurrency(item.total)}</Text>
        </HStack>
      </Card>
    );
  }, []);

  return (
    <Box bg="$backgroundLight50" flex={1}>
      <TopBar />
      <Button
        zIndex={2}
        position="absolute"
        top={insets.top + 20}
        right={4}
        bg="$purple500"
        $active-bg="$purple600"
        rounded="$full"
        alignSelf="flex-end"
        p="$5"
        size="xs"
        onPress={toggleModal}>
        <ButtonIcon as={FunnelIcon} />
      </Button>
      <Heading px="$4" py="$2" color="$textDark700" fontSize="$3xl">
        Facturas
      </Heading>
      <Text px="$4" color="$textDark700">
        Período:{'  '}
        <Text italic bold>
          {formatStringAsDate(startDate, 'YYYY/MM/DD')}
          {'  '}al{'  '}
          {formatStringAsDate(endDate, 'YYYY/MM/DD')}
        </Text>
      </Text>
      <Text px="$4" color="$textDark700">
        Total: {data?.records}
      </Text>
      <FlatList
        px="$4"
        mt="$3"
        contentInset={{ bottom: insets.bottom, top: 0, left: 0, right: 0 }}
        data={data?.invoices || []}
        renderItem={itemRenderer as any}
        keyExtractor={keyExtractor as any}
        windowSize={9}
        removeClippedSubviews
        getItemLayout={getItemListLayout}
      />
      <DatePicker
        isOpen={isModalOpen}
        onClose={toggleModal}
        initialEndDate={endDate}
        initialStartDate={startDate}
        onSelectedRange={handleDatesChange}
      />
    </Box>
  );
}
