import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Warehouses from './pages/Warehouses';
import Suppliers from './pages/Suppliers';
import Shipping from './pages/Shipping';
import Team from './pages/Team';
import Billing from './pages/Billing';
import Settings from './pages/Settings';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

export default function App(){
 return <Routes>
   <Route path="/login" element={<Auth/>}/>
   <Route element={<AppLayout/>}>
     <Route index element={<Dashboard/>}/>
     <Route path="inventory" element={<Inventory/>}/>
     <Route path="orders" element={<Orders/>}/>
     <Route path="warehouses" element={<Warehouses/>}/>
     <Route path="suppliers" element={<Suppliers/>}/>
     <Route path="shipping" element={<Shipping/>}/>
     <Route path="team" element={<Team/>}/>
     <Route path="billing" element={<Billing/>}/>
     <Route path="settings" element={<Settings/>}/>
   </Route>
   <Route path="/not-authorized" element={<Navigate to="/login" replace/>}/>
   <Route path="*" element={<NotFound/>}/>
 </Routes>;
}