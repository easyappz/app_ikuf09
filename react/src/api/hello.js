import instance from './axios';

export async function fetchHello() {
  const response = await instance.get('/api/hello/');
  return response.data;
}

export default fetchHello;
