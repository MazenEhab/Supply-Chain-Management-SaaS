# SupplyFlow Frontend

A React + JavaScript + Vite frontend starter for the SupplyFlow multi-tenant supply-chain SaaS.

## Requirements
- Node.js 20+
- npm

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Included pages
- Overview dashboard
- Inventory
- Orders
- Warehouses
- Suppliers
- Shipping & logistics
- Team & access
- Billing & plan
- Settings
- Login
- 404

## Project structure
```text
src/
  components/   Reusable UI components
  data/         Temporary mock data
  layouts/      Shared application layouts
  pages/        Route-level pages
  services/     API integration layer
  App.jsx
  main.jsx
  styles.css
```

## Connecting your backend
Set `VITE_API_BASE_URL` in `.env`. The shared fetch wrapper is in `src/services/api.js`.
Replace mock imports in each page with calls to your API. Example:
```js
import { api } from '../services/api';
// const products = await api.request('/products');
```

The current UI is intentionally populated with mock data. Forms and action buttons are presentation scaffolding until real API endpoints are connected. The login demo currently redirects to the overview and is not real authentication.
