import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
export default function StatCard({ label, value, change, trend = 'up', note, icon: Icon }) {
  return <div className="stat-card"><div className="stat-top"><span>{label}</span><div className="stat-icon">{Icon && <Icon size={18}/>}</div></div><div className="stat-value">{value}</div><div className="stat-foot"><span className={`trend ${trend}`}>{trend === 'up' ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {change}</span><span>{note}</span></div></div>;
}