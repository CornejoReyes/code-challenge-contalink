import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InvoicesScreen } from '~/app/screens/Invoices';
import { AppStackList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<AppStackList>();

export default function AppNavigator() {
  return (
    <Navigator>
      <Screen name="Invoices" component={InvoicesScreen} />
    </Navigator>
  );
}
