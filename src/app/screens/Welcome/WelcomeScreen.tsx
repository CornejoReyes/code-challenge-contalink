import {
  Box,
  Button,
  ButtonText,
  Heading,
  Input,
  InputField,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Platform } from 'react-native';
import { WelcomeScreenProps } from '~/app/navigation';

const contentContainerStyles = { flex: 1 };

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const [name, setName] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleContinue = async () => {
    await AsyncStorage.setItem('userName', name);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Invoices' }],
    });
  };

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        flex={1}
        scrollEnabled={false}
        contentContainerStyle={contentContainerStyles}
        keyboardShouldPersistTaps="handled">
        <Box flex={1}>
          <VStack
            space="lg"
            flex={1}
            justifyContent="center"
            alignItems="center">
            <Heading
              color="$textDark700"
              textAlign="center"
              fontSize="$4xl"
              lineHeight="$4xl">
              ¡Hola!{'\n'}¿Quién eres?
            </Heading>
            <Input variant="underlined" size="xl" w="80%">
              <InputField
                textAlign="center"
                placeholder="Escribe tu nombre aquí"
                value={name}
                onChangeText={handleNameChange}
              />
            </Input>
            <Button
              w="80%"
              rounded="$full"
              bg="$purple500"
              $active-bg="$purple600"
              size="xl"
              onPress={handleContinue}>
              <ButtonText>Continuar</ButtonText>
            </Button>
          </VStack>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
