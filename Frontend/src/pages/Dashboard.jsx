import { Activity, ArrowRight, ArrowUpRight, Boxes, ClipboardList, PackageCheck, Plus, TrendingUp, Truck, Warehouse } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { orders, products, salesData, shipments, warehouses } from '../data/mockData';
import StatCard from '../components/StatCard';
import StatusBadge from '../components/StatusBadge';

export default function Dashboard() {
  const lowStock = products.filter(p => p.stock <= p.reorder);
  return <div className="dashboard-page">
    <div className="welcome-row"><div><div className="eyebrow"><span className="live-dot"/> WORKSPACE OVERVIEW</div><h2>Your operations, <em>in sync.</em></h2><p>Here’s your supply chain performance at a glance.</p></div><button className="button button-primary"><Plus size={16}/> Create new</button></div>
    <div className="stats-grid">
      <StatCard label="Total inventory value" value="EGP 2.84M" change="12.8%" note="vs. last month" icon={Boxes}/>
      <StatCard label="Open orders" value="128" change="8.2%" note="vs. last month" icon={ClipboardList}/>
      <StatCard label="Active shipments" value="36" change="4.6%" note="vs. last month" icon={Truck}/>
      <StatCard label="Warehouse utilization" value="78.4%" change="2.1%" trend="down" note="vs. last month" icon={Warehouse}/>
    </div>
    <div className="dashboard-grid">
      <section className="panel chart-panel"><div className="panel-heading"><div><h3>Order & revenue overview</h3><p>Performance over the last 7 months</p></div><button className="select-button">Last 7 months <ChevronDownIcon/></button></div><div className="chart-legend"><span><i className="legend-blue"/> Revenue <b>EGP 1.42M</b></span><span><i className="legend-violet"/> Orders <b>360</b></span></div><div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><AreaChart data={salesData} margin={{top: 12,right: 8,left: -18,bottom: 0}}><defs><linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4F7DF3" stopOpacity={0.18}/><stop offset="95%" stopColor="#4F7DF3" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#edf0f6" vertical={false}/><XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#98a1b3',fontSize:12}} dy={10}/><YAxis axisLine={false} tickLine={false} tick={{fill:'#98a1b3',fontSize:11}}/><Tooltip contentStyle={{border:'1px solid #edf0f6',borderRadius:12,boxShadow:'0 8px 24px #26334d12'}}/><Area type="monotone" dataKey="revenue" stroke="#4F7DF3" strokeWidth={2.5} fill="url(#revenueFill)"/><Area type="monotone" dataKey="orders" stroke="#9B8AFB" strokeWidth={2} fill="transparent" strokeDasharray="5 5"/></AreaChart></ResponsiveContainer></div></section>
      <section className="panel activity-panel"><div className="panel-heading"><div><h3>Inventory health</h3><p>Stock status across locations</p></div><button className="more-button">•••</button></div><div className="health-score"><div className="donut"><div><strong>86%</strong><small>Healthy</small></div></div><div className="health-copy"><strong>Looking good!</strong><p>Most of your inventory is at healthy levels.</p></div></div><div className="health-rows"><div><span><i className="dot dot-green"/> In stock</span><b>1,284 <small>items</small></b></div><div><span><i className="dot dot-amber"/> Low stock</span><b>24 <small>items</small></b></div><div><span><i className="dot dot-red"/> Out of stock</span><b>8 <small>items</small></b></div></div><a className="panel-link" href="/inventory">View inventory <ArrowRight size={15}/></a></section>
    </div>
    <div className="bottom-grid">
      <section className="panel"><div className="panel-heading"><div><h3>Recent orders</h3><p>Latest activity from your customers</p></div><a className="text-link" href="/orders">View all <ArrowRight size={14}/></a></div><div className="compact-list">{orders.slice(0,4).map(o=><div className="order-row" key={o.id}><div className="order-icon"><PackageCheck size={17}/></div><div className="order-main"><strong>{o.id}</strong><small>{o.customer}</small></div><div className="order-total"><strong>EGP {o.total.toLocaleString()}</strong><StatusBadge status={o.status}/></div></div>)}</div></section>
      <section className="panel"><div className="panel-heading"><div><h3>Needs your attention</h3><p>Things that may need a quick look</p></div><span className="count-pill">{lowStock.length + 1} alerts</span></div><div className="alert-list"><div className="alert-item"><div className="alert-symbol amber"><Activity size={17}/></div><div><strong>{lowStock.length} products running low</strong><p>Some items are below their reorder point.</p><a href="/inventory">Review stock <ArrowRight size={13}/></a></div></div><div className="alert-item"><div className="alert-symbol blue"><Warehouse size={17}/></div><div><strong>Giza warehouse is near capacity</strong><p>Current utilization is 91% of total capacity.</p><a href="/warehouses">View warehouse <ArrowRight size={13}/></a></div></div></div></section>
    </div>
  </div>;
}
function ChevronDownIcon(){return <span className="chevron-small">⌄</span>}