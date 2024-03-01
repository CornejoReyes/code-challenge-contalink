import { Box, Heading } from '@gluestack-ui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TopBar() {
  const [name, setName] = useState('');
  const inset = useSafeAreaInsets();

  const getName = async () => {
    const userName = await AsyncStorage.getItem('userName');
    setName(userName!);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <Box
      bg="$purple300"
      elevation="$4"
      hardShadow="5"
      pt={inset.top}
      px="$4"
      pb="$2">
      <Heading fontSize="$xl" color="$textDark900">
        Hola, {name}
      </Heading>
    </Box>
  );
}
