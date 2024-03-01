import { Box, Heading, StatusBar, useToken } from '@gluestack-ui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TopBar() {
  const [name, setName] = useState('');
  const inset = useSafeAreaInsets();
  const statusBarBackground = useToken('colors', 'purple300');

  const getName = async () => {
    const userName = await AsyncStorage.getItem('userName');
    setName(userName!);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={statusBarBackground}
        barStyle="dark-content"
      />
      <Box
        bg="$purple300"
        elevation="$4"
        hardShadow="5"
        pt={inset.top}
        px="$4"
        pb="$2">
        <Heading fontSize="$xl" color="$textDark900" testID="topbar-greetings">
          Hola, {name}
        </Heading>
      </Box>
    </>
  );
}
