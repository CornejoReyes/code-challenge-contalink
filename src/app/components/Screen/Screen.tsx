import { SafeAreaView } from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {}

export default function Screen({ children }: Props) {
  return (
    <SafeAreaView flex={1} bg="$white">
      {children}
    </SafeAreaView>
  );
}
