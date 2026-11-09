// Central API layer. Replace the mock implementations as your backend endpoints become available.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed (${response.status})`);
  }
  if (response.status === 204) return null;
  return response.json();
}

export const api = {
  // Examples to wire when your endpoints are ready:
  // getMe: () => request('/users/me'),
  // getProducts: (params = '') => request(`/products${params}`),
  // createProduct: (payload) => request('/products', { method: 'POST', body: JSON.stringify(payload) }),
  // getOrders: () => request('/orders'),
  // getWarehouses: () => request('/warehouses'),
  request
};

export { API_BASE_URL };