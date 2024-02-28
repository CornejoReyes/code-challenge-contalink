import { render, screen } from '@testing-library/react-native';
import App from '../App';

describe('App component', () => {
  it('should render correctly', async () => {
    render(<App />);
    const greeting = await screen.findByText('Hello There');

    expect(screen.toJSON()).toMatchSnapshot();
    expect(greeting).toBeOnTheScreen();
  });
});
