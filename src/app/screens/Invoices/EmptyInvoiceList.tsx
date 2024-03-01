import { Center, Heading } from '@gluestack-ui/themed';
import EmptyList from '~/assets/empty.svg';

export default function EmptyInvoiceList() {
  return (
    <Center mt="$10">
      <EmptyList width={50} height={50} />
      <Heading w="80%" fontSize="$xl" color="$textDark400" textAlign="center">
        No hay facturas disponibles en este rango de fechas.
      </Heading>
    </Center>
  );
}
