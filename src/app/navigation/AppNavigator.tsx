import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { InvoicesScreen } from '~/app/screens/Invoices';
import { WelcomeScreen } from '~/app/screens/Welcome';
import { AppStackList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<AppStackList>();

export default function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUser = async () => {
    const userName = await AsyncStorage.getItem('userName');
    if (userName) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isLoggedIn ? 'Invoices' : 'Welcome'}>
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="Invoices" component={InvoicesScreen} />
    </Navigator>
  );
}
