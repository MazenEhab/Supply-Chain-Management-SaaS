import { Plus, Search, MoreHorizontal, Star } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import { suppliers } from '../data/mockData';
export default function Suppliers(){
 const [q,setQ]=useState('');
 const rows=suppliers.filter(s=>s.name.toLowerCase().includes(q.toLowerCase()));
 const cols=[{key:'name',label:'Supplier',render:(v,r)=><div className="product-cell"><div className="supplier-avatar">{v.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><div><strong>{v}</strong><small>{r.contact}</small></div></div>},{key:'category',label:'Category'},{key:'lead',label:'Lead time'},{key:'rating',label:'Rating',render:v=><span className="rating"><Star size={13} fill="currentColor"/>{v}</span>},{key:'status',label:'Status',render:v=><StatusBadge status={v}/>} ,{key:'actions',label:'',render:()=> <button className="more-button"><MoreHorizontal size={18}/></button>}];
 return <><PageHeader title="Suppliers" description="Build stronger supplier relationships and stay ahead of purchasing."><button className="button button-primary"><Plus size={16}/> Add supplier</button></PageHeader><div className="stats-strip"><div><span>Total suppliers</span><strong>48</strong></div><div><span>Active suppliers</span><strong>42</strong></div><div><span>Average lead time</span><strong>6.4 <small>days</small></strong></div><div><span>Average rating</span><strong>4.7 <small>/ 5</small></strong></div></div><div className="panel table-panel"><div className="table-toolbar"><div className="search-field"><Search size={16}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search suppliers..."/></div><button className="button button-secondary">Category⌄</button></div><DataTable columns={cols} rows={rows}/></div></>;
}