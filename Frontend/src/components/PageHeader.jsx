export default function PageHeader({ title, description, action, children }) {
  return <div className="content-heading"><div><h2>{title}</h2><p>{description}</p></div><div className="heading-actions">{children}{action}</div></div>;
}