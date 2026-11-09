export default function StatusBadge({ status }) {
  const key = status.toLowerCase().replaceAll(' ', '-');
  return <span className={`status-badge status-${key}`}><i/>{status}</span>;
}