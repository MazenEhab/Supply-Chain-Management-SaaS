export const products = [
  { id: 'PRD-1048', name: 'Industrial Safety Gloves', category: 'Safety', sku: 'SAFE-GL-08', warehouse: 'Cairo Central', stock: 1240, reorder: 300, price: 18.5, status: 'In stock' },
  { id: 'PRD-1047', name: 'Hydraulic Pressure Valve', category: 'Components', sku: 'HYD-VL-22', warehouse: 'Alexandria Port', stock: 86, reorder: 100, price: 245, status: 'Low stock' },
  { id: 'PRD-1046', name: 'Packaging Carton — Large', category: 'Packaging', sku: 'PKG-CT-11', warehouse: 'Giza Distribution', stock: 3200, reorder: 500, price: 4.2, status: 'In stock' },
  { id: 'PRD-1045', name: 'Industrial Motor 2.2kW', category: 'Machinery', sku: 'MTR-22K-4', warehouse: 'Cairo Central', stock: 0, reorder: 12, price: 890, status: 'Out of stock' },
  { id: 'PRD-1044', name: 'Stainless Steel Fasteners', category: 'Components', sku: 'STL-FS-90', warehouse: 'Alexandria Port', stock: 540, reorder: 150, price: 2.8, status: 'In stock' },
  { id: 'PRD-1043', name: 'Protective Face Shield', category: 'Safety', sku: 'SAFE-FS-02', warehouse: 'Giza Distribution', stock: 42, reorder: 80, price: 12, status: 'Low stock' }
];

export const orders = [
  { id: 'ORD-20841', customer: 'Nile Industrial Group', date: 'Nov 09, 2026', items: 12, total: 18450, status: 'Processing' },
  { id: 'ORD-20840', customer: 'Delta Manufacturing', date: 'Nov 09, 2026', items: 8, total: 9270, status: 'Pending' },
  { id: 'ORD-20839', customer: 'Cairo Equipment Co.', date: 'Nov 08, 2026', items: 21, total: 32400, status: 'Shipped' },
  { id: 'ORD-20838', customer: 'Modern Build Solutions', date: 'Nov 08, 2026', items: 5, total: 6120, status: 'Delivered' },
  { id: 'ORD-20837', customer: 'Alex Trade & Supply', date: 'Nov 07, 2026', items: 14, total: 15380, status: 'Cancelled' }
];

export const warehouses = [
  { name: 'Cairo Central', code: 'WH-CAI-01', city: 'Cairo', capacity: 82, units: '12,480', manager: 'Omar Hassan', status: 'Operational' },
  { name: 'Alexandria Port', code: 'WH-ALX-02', city: 'Alexandria', capacity: 64, units: '8,240', manager: 'Mariam Adel', status: 'Operational' },
  { name: 'Giza Distribution', code: 'WH-GIZ-03', city: 'Giza', capacity: 91, units: '6,910', manager: 'Youssef Samir', status: 'Near capacity' }
];

export const suppliers = [
  { name: 'Global Industrial Parts', contact: 'sales@globalparts.com', category: 'Components', lead: '7–10 days', rating: '4.8', status: 'Active' },
  { name: 'Nile Packaging Co.', contact: 'orders@nilepack.eg', category: 'Packaging', lead: '3–5 days', rating: '4.6', status: 'Active' },
  { name: 'SafeWork Supplies', contact: 'hello@safework.eg', category: 'Safety', lead: '2–4 days', rating: '4.9', status: 'Active' },
  { name: 'Metro Machinery', contact: 'contact@metromachinery.com', category: 'Machinery', lead: '14–21 days', rating: '4.3', status: 'On hold' }
];

export const shipments = [
  { id: 'SHP-9081', destination: 'Alexandria, Egypt', carrier: 'Swift Logistics', eta: 'Today, 4:30 PM', progress: 78, status: 'In transit' },
  { id: 'SHP-9080', destination: 'Mansoura, Egypt', carrier: 'Nile Express', eta: 'Tomorrow, 11:00 AM', progress: 42, status: 'In transit' },
  { id: 'SHP-9079', destination: 'Cairo, Egypt', carrier: 'Swift Logistics', eta: 'Delivered Nov 08', progress: 100, status: 'Delivered' },
  { id: 'SHP-9078', destination: 'Tanta, Egypt', carrier: 'Delta Cargo', eta: 'Awaiting pickup', progress: 12, status: 'Preparing' }
];

export const salesData = [
  { name: 'May', orders: 34, revenue: 42 }, { name: 'Jun', orders: 42, revenue: 51 },
  { name: 'Jul', orders: 38, revenue: 47 }, { name: 'Aug', orders: 55, revenue: 66 },
  { name: 'Sep', orders: 49, revenue: 61 }, { name: 'Oct', orders: 68, revenue: 79 },
  { name: 'Nov', orders: 74, revenue: 91 }
];