import './InfoPage.css';
import NavPanel from '../NavPanel/NavPanel';

export default function Delivery({ title, children }) {
  return (
    <div className="infopage">
      <div className="infopage__navpanel">
        <NavPanel />
      </div>
      <div className="infopage__content">
        <h1 className="infopage__content-title">{title}</h1>
        {children}
      </div>
    </div>
  );
}
