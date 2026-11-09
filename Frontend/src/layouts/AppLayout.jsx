import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const meta = {
  '/': ['Good evening, Mazen', 'Here’s what’s happening across your supply chain today.'],
  '/inventory': ['Inventory', 'Keep track of stock levels across all your warehouses.'],
  '/orders': ['Orders', 'Manage customer orders and procurement workflows.'],
  '/warehouses': ['Warehouses', 'Monitor warehouse capacity, locations, and stock.'],
  '/suppliers': ['Suppliers', 'Manage supplier relationships and purchasing details.'],
  '/shipping': ['Shipping & logistics', 'Track shipments and keep deliveries moving.'],
  '/team': ['Team & access', 'Manage the people and permissions in your workspace.'],
  '/billing': ['Billing & plan', 'Manage your subscription and billing details.'],
  '/settings': ['Settings', 'Configure your workspace preferences.']
};
export default function AppLayout() {
  const location = useLocation();
  const [title, subtitle] = meta[location.pathname] || ['SupplyFlow', 'Manage your supply chain.'];
  return <div className="app-shell"><Sidebar/><main className="main-area"><Topbar title={title} subtitle={subtitle}/><div className="page-content"><Outlet/></div></main></div>;
}