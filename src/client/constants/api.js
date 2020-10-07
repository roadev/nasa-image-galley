export const baseUrl = 'https://images-api.nasa.gov';

const endpoints = {
  getItems: q => `/search?q=${q}`,
};

export default endpoints;
