import axios from 'axios';
import { get } from '../http';

describe('Testing HTTP adapter methods', () => {
  it('should return a correct response shape if request is successful', async () => {
    const mockResponse = {
      status: 200,
      data: { test: 'test' },
    };
    (axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);
    const response = await get('/test');
    expect(response).toHaveProperty('status', 200);
    expect(response).toHaveProperty('ok', true);
    expect(response.data).toStrictEqual(mockResponse.data);
    expect(response.originalResponse).toStrictEqual(mockResponse);
  });

  it('should return a falsy response shape if request respond with error in range of 3xx - 4xx', async () => {
    const mockResponse = {
      status: 401,
      data: { message: 'unauthorized' },
    };
    (axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);
    const response = await get('/test');
    expect(response).toHaveProperty('status', 401);
    expect(response).toHaveProperty('ok', false);
    expect(response.data).toStrictEqual(mockResponse.data);
    expect(response.originalResponse).toStrictEqual(mockResponse);
  });

  it('should reject if request respond with an error in range of 5xx', async () => {
    const mockResponse = {
      status: 503,
      data: { message: 'server error' },
    };
    (axios.get as jest.Mock).mockRejectedValueOnce(mockResponse);
    await expect(() => get('/test')).rejects.toHaveProperty('status', 503);
  });
});
