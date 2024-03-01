import {
  Button,
  ButtonText,
  HStack,
  Modal,
  ModalBackdrop,
  ModalContent,
  useToken,
} from '@gluestack-ui/themed';
import dayjs from 'dayjs';
import { useState } from 'react';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';

interface Props {
  isOpen: boolean;
  initialStartDate: string;
  initialEndDate: string;
  onSelectedRange({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }): void;
  onClose(): void;
}

export default function DatePicker({
  isOpen,
  onClose,
  initialEndDate,
  initialStartDate,
  onSelectedRange,
}: Props) {
  const mainColor = useToken('colors', 'purple500');
  const textColor = useToken('colors', 'textDark700');
  const [range, setRange] = useState<Record<string, any>>({
    start: dayjs(initialStartDate),
    end: dayjs(initialEndDate),
  });

  const handleDatesChange = ({
    startDate: start,
    endDate: end,
  }: {
    startDate: DateType;
    endDate: DateType;
  }) => {
    setRange({
      start: start,
      end: end,
    });
  };

  const handleCancelDates = () => {
    setRange({
      start: dayjs(initialStartDate),
      end: dayjs(initialEndDate),
    });
    onClose();
  };

  const handleAccept = () => {
    onSelectedRange({
      startDate: range.start.format('YYYY-MM-DD'),
      endDate: range.end.format('YYYY-MM-DD'),
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent p="$3">
        <DateTimePicker
          mode="range"
          locale="es"
          startDate={range.start}
          endDate={range.end}
          onChange={handleDatesChange}
          displayFullDays
          calendarTextStyle={{ color: textColor }}
          headerTextStyle={{ color: textColor }}
          weekDaysTextStyle={{ color: textColor }}
          headerButtonColor={mainColor}
          selectedItemColor={mainColor}
        />
        <HStack mt="$2" justifyContent="flex-end" space="sm">
          <Button
            variant="outline"
            size="sm"
            borderColor="$purple500"
            $active-bg="$purple100"
            onPress={handleCancelDates}>
            <ButtonText color="$purple500">Cancelar</ButtonText>
          </Button>
          <Button
            size="sm"
            bg="$purple500"
            $active-bg="$purple600"
            isDisabled={!range.start || !range.end}
            onPress={handleAccept}>
            <ButtonText>Aceptar</ButtonText>
          </Button>
        </HStack>
      </ModalContent>
    </Modal>
  );
}
