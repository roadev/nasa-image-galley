import endpoints, { baseUrl } from '../constants/api';

export default async function getItems(query) {
  const response = await fetch(`${baseUrl}${endpoints.getItems(query)}`);
  const responseJson = await response.json();
  return responseJson.collection.items.slice(0, 20);
}
