import AsyncStorage from '@react-native-async-storage/async-storage';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

describe('App component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', async () => {
    render(<App />);

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should show WelcomeScreen if there is not a user name', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(undefined);
    render(<App />);
    const greetings = await screen.findByTestId('welcome-greetings');

    expect(greetings).toBeOnTheScreen();
    expect(greetings).toHaveTextContent('¡Hola!\n¿Quién eres?');
  });

  it('should show InvoicesScreen if there is user name', async () => {
    (AsyncStorage.getItem as jest.Mock).mockImplementation(() => 'Fernando');

    render(<App />);

    const topBarGreetings = await screen.findByTestId('topbar-greetings');

    expect(topBarGreetings).toBeOnTheScreen();
    expect(AsyncStorage.getItem).toHaveBeenCalled();
    expect(topBarGreetings).toHaveTextContent('Hola, Fernando');
  });
});
