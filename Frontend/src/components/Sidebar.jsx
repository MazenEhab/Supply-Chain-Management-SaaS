import { NavLink } from 'react-router-dom';
import { Activity, Boxes, Building2, ChevronDown, CircleHelp, CreditCard, LayoutDashboard, LogOut, Package, Settings, Truck, Users, Warehouse } from 'lucide-react';

const groups = [
  { label: 'WORKSPACE', links: [
    { to: '/', label: 'Overview', icon: LayoutDashboard, end: true },
    { to: '/inventory', label: 'Inventory', icon: Boxes, badge: '2' },
    { to: '/orders', label: 'Orders', icon: Package },
    { to: '/warehouses', label: 'Warehouses', icon: Warehouse },
    { to: '/suppliers', label: 'Suppliers', icon: Building2 },
    { to: '/shipping', label: 'Shipping', icon: Truck }
  ]},
  { label: 'MANAGE', links: [
    { to: '/team', label: 'Team & access', icon: Users },
    { to: '/billing', label: 'Billing & plan', icon: CreditCard },
    { to: '/settings', label: 'Settings', icon: Settings }
  ]}
];

export default function Sidebar() {
  return <aside className="sidebar">
    <div className="brand"><div className="brand-mark"><Activity size={19}/></div><span>Supply<span className="brand-light">Flow</span></span></div>
    <button className="workspace-switch"><div className="workspace-avatar">N</div><div className="workspace-copy"><strong>Nile Industries</strong><small>Business workspace</small></div><ChevronDown size={15}/></button>
    <nav>{groups.map(group => <div className="nav-group" key={group.label}><div className="nav-label">{group.label}</div>{group.links.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}><item.icon size={18}/><span>{item.label}</span>{item.badge && <b className="nav-badge">{item.badge}</b>}</NavLink>)}</div>)}</nav>
    <div className="sidebar-bottom"><div className="help-card"><div className="help-icon"><CircleHelp size={17}/></div><strong>Need a hand?</strong><p>Visit our help center for guides and support.</p><a href="mailto:support@supplyflow.app">Get support <span>↗</span></a></div><div className="profile-mini"><div className="avatar">MA</div><div className="profile-copy"><strong>Mazen Adel</strong><small>Workspace admin</small></div><button aria-label="Sign out"><LogOut size={17}/></button></div></div>
  </aside>;
}