export default function DataTable({ columns, rows, empty = 'Nothing to show yet.' }) {
  if (!rows.length) return <div className="empty-state">{empty}</div>;
  return <div className="table-scroll"><table className="data-table"><thead><tr>{columns.map(col => <th key={col.key}>{col.label}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={row.id || row.name || i}>{columns.map(col => <td key={col.key}>{col.render ? col.render(row[col.key], row) : row[col.key]}</td>)}</tr>)}</tbody></table></div>;
}