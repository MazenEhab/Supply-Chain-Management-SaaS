import { Link } from 'react-router-dom';
export default function NotFound(){return <div className="not-found"><div className="brand-mark">↗</div><span>404 ERROR</span><h1>Well, this is unexpected.</h1><p>The page you’re looking for doesn’t exist or may have moved.</p><Link className="button button-primary" to="/">Back to overview</Link></div>}
