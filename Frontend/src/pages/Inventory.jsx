import { useMemo, useState } from 'react';
import { Download, Filter, Plus, Search, SlidersHorizontal } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import { products } from '../data/mockData';

export default function Inventory() {
  const [query,setQuery] = useState(''); const [filter,setFilter] = useState('All');
  const filtered = useMemo(()=>products.filter(p => (p.name.toLowerCase().includes(query.toLowerCase()) || p.sku.toLowerCase().includes(query.toLowerCase())) && (filter==='All' || p.status===filter)),[query,filter]);
  const columns = [
    {key:'name',label:'Product',render:(v,r)=><div className="product-cell"><div className="product-thumb">{v.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><div><strong>{v}</strong><small>{r.sku}</small></div></div>},
    {key:'category',label:'Category'}, {key:'warehouse',label:'Warehouse'},
    {key:'stock',label:'Available stock',render:(v,r)=><div className="stock-cell"><strong>{v.toLocaleString()} units</strong><small>Reorder at {r.reorder}</small></div>},
    {key:'price',label:'Unit price',render:v=>`EGP ${v.toLocaleString()}`},
    {key:'status',label:'Status',render:v=><StatusBadge status={v}/>}
  ];
  return <><PageHeader title="Inventory" description="A clear view of every product across your locations."><button className="button button-secondary"><Download size={15}/> Export</button><button className="button button-primary"><Plus size={16}/> Add product</button></PageHeader><div className="stats-strip"><div><span>Total SKUs</span><strong>1,316</strong></div><div><span>Total units</span><strong>27,630</strong></div><div><span>Low stock items</span><strong className="warning-text">24</strong></div><div><span>Out of stock</span><strong className="danger-text">8</strong></div></div><div className="panel table-panel"><div className="table-toolbar"><div className="search-field"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products or SKU..."/></div><div className="toolbar-actions"><select value={filter} onChange={e=>setFilter(e.target.value)}><option>All</option><option>In stock</option><option>Low stock</option><option>Out of stock</option></select><button className="button button-secondary"><Filter size={15}/> Filters</button><button className="button button-icon"><SlidersHorizontal size={16}/></button></div></div><DataTable columns={columns} rows={filtered}/><div className="table-footer"><span>Showing <b>{filtered.length}</b> of <b>1,316</b> products</span><div className="pagination"><button disabled>Previous</button><button className="current">1</button><button>2</button><button>3</button><span>...</span><button>132</button><button>Next</button></div></div></div></>;
}