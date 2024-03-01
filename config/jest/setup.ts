import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import '@testing-library/react-native/extend-expect';
import axios from 'axios';

jest.mock('axios');
(axios.create as jest.MockedFunction<typeof axios.create>).mockImplementation(
  () => axios,
);
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
