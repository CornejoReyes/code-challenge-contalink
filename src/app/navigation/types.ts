import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackList = {
  Invoices: undefined;
};

export type InvoicesScreenProps = NativeStackScreenProps<
  AppStackList,
  'Invoices'
>;
