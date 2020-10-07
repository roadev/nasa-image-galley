import endpoints, { baseUrl } from '../constants/api';

export async function getItems(query) {
  const response = await fetch(`${baseUrl}${endpoints.getItems(query)}`);
  const responseJson = await response.json();
  return responseJson.data;
}
