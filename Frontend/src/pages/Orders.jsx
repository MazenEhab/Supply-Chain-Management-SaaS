import { Plus, Search, Download } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import { orders } from '../data/mockData';
export default function Orders(){
 const [q,setQ]=useState('');
 const rows=orders.filter(o=>o.id.toLowerCase().includes(q.toLowerCase())||o.customer.toLowerCase().includes(q.toLowerCase()));
 const cols=[{key:'id',label:'Order ID',render:v=><strong className="mono">{v}</strong>},{key:'customer',label:'Customer'},{key:'date',label:'Order date'},{key:'items',label:'Items',render:v=>`${v} items`},{key:'total',label:'Order total',render:v=><strong>EGP {v.toLocaleString()}</strong>},{key:'status',label:'Status',render:v=><StatusBadge status={v}/>}];
 return <><PageHeader title="Orders" description="Track orders from the moment they’re placed to delivery."><button className="button button-secondary"><Download size={15}/> Export</button><button className="button button-primary"><Plus size={16}/> Create order</button></PageHeader><div className="stats-strip"><div><span>All orders</span><strong>1,284</strong></div><div><span>Pending</span><strong>18</strong></div><div><span>Processing</span><strong>42</strong></div><div><span>Delivered this month</span><strong>306</strong></div></div><div className="panel table-panel"><div className="table-toolbar"><div className="search-field"><Search size={16}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search order ID or customer..."/></div><button className="button button-secondary">All statuses⌄</button></div><DataTable columns={cols} rows={rows}/><div className="table-footer"><span>Showing <b>{rows.length}</b> of <b>1,284</b> orders</span><div className="pagination"><button disabled>Previous</button><button className="current">1</button><button>2</button><button>3</button><button>Next</button></div></div></div></>;
}