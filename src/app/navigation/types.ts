import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackList = {
  Welcome: undefined;
  Invoices: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
  AppStackList,
  'Welcome'
>;

export type InvoicesScreenProps = NativeStackScreenProps<
  AppStackList,
  'Invoices'
>;
