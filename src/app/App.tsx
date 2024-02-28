import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Text } from '@gluestack-ui/themed';

function App() {
  return (
    <GluestackUIProvider config={config}>
      <Text>Hello There</Text>
    </GluestackUIProvider>
  );
}

export default App;
