import './InfoPage.css';
import NavPanel from '../NavPanel/NavPanel';

export default function InfoPage({
  title,
  id,
  activeNavPanelItem,
  appointActiveNavPanelItem,
  children,
}) {
  return (
    <div className="infopage">
      <div className="infopage__navpanel">
        <NavPanel
          activeNavPanelItem={activeNavPanelItem}
          appointActiveNavPanelItem={appointActiveNavPanelItem}
        />
      </div>
      <div className="infopage__content">
        <h1 className="infopage__content-title" id={id}>
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
