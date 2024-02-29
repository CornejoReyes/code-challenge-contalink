import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppNavigator } from './navigation';

const queryClient = new QueryClient();

function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
        </QueryClientProvider>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;
